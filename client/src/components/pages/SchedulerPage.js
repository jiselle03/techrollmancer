import 'date-fns';
import React, { useState, useEffect } from 'react';

import Utils from '../../js/utils';
import Game from '../../api/game';
import { BackgroundImage } from '../styles/Image';
import MainStyle from '../styles/MainStyle';
import FlexBox from '../styles/FlexBox';
import { FormContent } from '../styles/FormStyle';

import { Button, Card, FormControl, Input, InputLabel, useMediaQuery } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const SchedulerPage = props => {
    const [games, setGames] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { currentUser } = props;
    const { formatDate } = Utils;
    const laptop = useMediaQuery('(min-width:1280px)');

    const currentDate = formatDate(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);

        const newGame = {
            date: fd.get("date"),
            time: fd.get("time"),
            name: fd.get("name"),
            notes: fd.get("notes"),
            user_id: currentUser.id
        };

        Game.create(newGame).then(() => {
            Game.all().then(games => {
                setGames(games);
            });
        });
    };

    const handleDelete = id => {
        Game.destroy(id).then(() => {
            Game.all().then(games => {
                setGames(games);
            });
        });
    };

    useEffect(() => {
        Game.all().then(games => {
            setGames(games);
        });
    }, []);

    return(
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png"
            light={true}
        >
            <MainStyle>
                <h1>
                    Scheduler
                </h1>

                <Card
                    style={{
                        width: laptop ? "60vw" : "70vw",
                        padding: "2em",
                        margin: "1em 0",
                    }}
                >
                    <h2>Future Sessions</h2>
                    {games.map((game, index) => (
                        game.date >= currentDate && (
                        <div key={index} className="game">
                            <span className="name">
                            <h6>{game.name}</h6>
                            </span>
                            <span className="button">
                            <Button onClick={() => handleDelete(game.id)}>Cancel</Button>
                            </span>
                            <p>{game.date} at {game.time}</p>
                            <p className="notes"><strong>Notes:</strong></p>
                            <p>{game.notes}</p>
                            <hr />
                        </div>
                    )))}
                </Card>

                <Card
                    style={{
                        width: laptop ? "60vw" : "70vw",
                        padding: "2em",
                        margin: "1em 0",
                    }}
                >
                <h2>Add Session</h2>
                <form onSubmit={handleSubmit}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div className="datetime">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                name="date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                style={FormContent.datetime}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                name="time"
                                label="Time picker"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                                style={FormContent.datetime}
                            />
                        </div>
                        <FormControl style={FormContent.scheduler}>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            />
                        </FormControl>
                        <FormControl style={FormContent.scheduler}>
                            <InputLabel htmlFor="notes">Notes</InputLabel>
                            <Input
                            id="notes"
                            type="text"
                            name="notes"
                            placeholder="Notes"
                            />
                        </FormControl>
                        <FlexBox justifyContent="center">
                            <Button 
                                variant="contained"
                                color="secondary"
                                type="submit"
                                className="button"
                            >
                                Schedule
                            </Button>
                        </FlexBox>
                    </MuiPickersUtilsProvider>
                    </form>
                </Card>

                <Card
                    style={{
                        width: laptop ? "60vw" : "70vw",
                        padding: "2em",
                        margin: "1em 0",
                    }}
                >
                    <h2>Past Sessions</h2>
                    {games.map((game, index) => (
                        game.date < currentDate && (
                        <div key={index}>
                            <div className="game">
                                <span className="name">
                            <h6>{game.name}</h6> 
                            </span>
                                <span className="button">
                            <Button onClick={() => handleDelete(game.id)}>Delete</Button>
                            </span>
                            </div>
                            <p>{game.date} at {game.time}</p>
                        </div>
                    )))}
                </Card>

            </MainStyle>
        </BackgroundImage>
    );
};

export default SchedulerPage;
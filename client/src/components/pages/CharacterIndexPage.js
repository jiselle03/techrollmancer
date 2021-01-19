import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Character from '../../api/character';
import CharacterNew from '../character/CharacterNew';
import { BackgroundImage } from '../styles/Image';
import MainStyle from '../styles/MainStyle';
import { CardStyle, CardContentStyle } from '../styles/CardStyle';

import { Card, CardContent, CircularProgress, Grid } from '@material-ui/core';

const CharacterIndexPage = props => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Character.all().then(characters => { 
            setCharacters(characters);
            setIsLoading(false);
          });
    }, []);

    if (isLoading) {
        return(
            <CircularProgress variant="determinate" />
        );
    };

    return (
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png" 
        >
            <MainStyle>
                <h1>
                    CHARACTERS
                </h1>

                {characters.length === 0 && (
                    <h5>
                        You have not created any characters.
                    </h5>
                )}

                {characters && (
                    <>
                        <Grid container>
                        {characters.map(character => (
                            <div key={character.id}>
                                <Link 
                                    to={`/characters/${character.id}`} 
                                    className="link" 
                                >
                                    <CardStyle
                                        image={character.photo_url}
                                        imageSize="cover"
                                    >
                                        <Card>
                                            <CardContent style={CardContentStyle.content}>
                                                <h6 className="card-text">
                                                    {character.name}
                                                </h6>
                                                <p className="card-text">
                                                    {character.gender} {character.race}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </CardStyle>
                                </Link>
                            </div>
                        ))}
                        </Grid>
                    </>
                )}

                <CharacterNew currentUser={props.currentUser} type="character" {...props} />

            </MainStyle>
        </BackgroundImage>
    );
};

export default CharacterIndexPage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { BackgroundImage } from '../styles/BackgroundImage';
import { CircularProgress } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const getEquipments = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/equipment");
};

export const ArmorIndexPage = () => {
    const [equipments, setEquipments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getEquipments().then(equipments => { 
            setEquipments(equipments.data);
            setIsLoading(false);
          });
    }, []);

    if(isLoading) {
        return(
            <CircularProgress variant="determinate" />
        );
    };

    return (
        <BackgroundImage 
            image={require('../../assets/d20.png')}
        >
            <main className="Main">
                <h1>ARMOR</h1>
                <Divider />

                <div className="list-container">
                    <h3>Light</h3>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Armor" && equipment.armor_category === "Light"
                    }).map(armor => (
                        <div key={armor.slug}>
                            <Link className="link" to={`/libraries/equipment/${armor.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={armor.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <h3>Medium</h3>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Armor" && equipment.armor_category === "Medium"
                    }).map(armor => (
                        <div key={armor.slug}>
                            <Link className="link" to={`/libraries/equipment/${armor.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={armor.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <h3>Heavy</h3>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Armor" && equipment.armor_category === "Heavy"
                    }).map(armor => (
                        <div key={armor.slug}>
                            <Link className="link" to={`/libraries/equipment/${armor.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={armor.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <h3>Shield</h3>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Armor" && equipment.armor_category === "Shield"
                    }).map(armor => (
                        <div key={armor.slug}>
                            <Link className="link" to={`/libraries/equipment/${armor.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={armor.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>
                </div>
            </main>
        </BackgroundImage>
    );
};

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

export const WeaponIndexPage = () => {
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
            <main className="Index-Container Main">
                <h1>WEAPONS</h1>
                <Divider />

                <div className="list-container">
                    <h3>Simple Melee</h3>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Weapon" && equipment.category_range === "Simple Melee"
                    }).map(weapon => (
                        <div key={weapon.slug}>
                            <Link className="link" to={`/libraries/equipment/${weapon.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={weapon.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <h3>Simple Ranged</h3>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Weapon" && equipment.category_range === "Simple Ranged"
                    }).map(weapon => (
                        <div key={weapon.slug}>
                            <Link className="link" to={`/libraries/equipment/${weapon.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={weapon.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <h3>Martial Melee</h3>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Weapon" && equipment.category_range === "Martial Melee"
                    }).map(weapon => (
                        <div key={weapon.slug}>
                            <Link className="link" to={`/libraries/equipment/${weapon.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={weapon.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <h3>Martial Ranged</h3>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Weapon" && equipment.category_range === "Martial Ranged"
                    }).map(weapon => (
                        <div key={weapon.slug}>
                            <Link className="link" to={`/libraries/equipment/${weapon.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={weapon.name} />
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

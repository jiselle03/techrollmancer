import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Library from '../../api/library';
import { BackgroundImage } from '../styles/Image';
import MainStyle from '../styles/MainStyle';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

const ToolIndexPage = () => {
    const [equipments, setEquipments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const types = ["Artisan's Tools", "Gaming Sets", "Musical Instruments", "Other Tools"];

    useEffect(() => {
        Library.allEquipments().then(equipments => { 
            setEquipments(equipments);
            setIsLoading(false);
          });
    }, []);

    if (isLoading) return (<CircularProgress variant="determinate" />);

    return (
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png"
            light={true}
        >
            <MainStyle>
                <h1>
                    TOOLS
                </h1>
                
                {types.map(type => (
                    <div key={type}>
                        <h2>{type}</h2>

                        <List component="nav" className="list">
                            {equipments.filter(equipment => {
                                return equipment.equipment_category === "Tools" && equipment.tool_category === type
                            }).map(tool => (
                                <div key={tool.slug}>
                                    <Link className="link" to={`/libraries/equipment/${tool.slug}`}>
                                        <ListItem button>
                                            <ListItemText primary={tool.name} />
                                        </ListItem>
                                    </Link>
                                </div>
                            ))}
                        </List>
                    </div>
                ))}
            </MainStyle>
        </BackgroundImage>
    );
};

export default ToolIndexPage;
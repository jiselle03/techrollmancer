import React from 'react';

import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const SpellDetails = props => {
    const { name, desc, higher_level, range, components, material,
            ritual, duration, concentration, casting_time, school } = props.spell;

    const details = [
        {
            name: "Description",
            content: desc
        },
        {
            name: "Higher Level",
            content: higher_level
        },
        {
            name: "Range",
            content: range
        },
        {
            name: "Components",
            content: components
        },
        {
            name: "Material",
            content: material
        },
        {
            name: "Ritual",
            content: ritual
        }, 
        {
            name: "Duration",
            content: duration
        }, 
        {
            name: "Concentration",
            content: concentration
        }, 
        {
            name: "Casting Time",
            content: casting_time
        }, 
        {
            name: "School",
            content: school
        }
    ];

    return(
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <h5>{name}</h5>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div style={{display: "block"}}>
                    {details.map(category => (
                        <div key={category.name} className={category.content ? null : "hidden"}>
                            <h6>{category.name}</h6>
                            <p>{category.content}</p>
                        </div>
                    ))}
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default SpellDetails;

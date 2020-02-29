import React from 'react';

export const TooltipRoll = props => {
    const { bonus, ability, name, header } = props;

    const handleOpen = (bonus, ability) => {
        return props.onHandleOpen(bonus, ability);
    };

    return(
        <div className="tooltip-roll">
            {header && (
                <h6 className="header" onClick={() => handleOpen(bonus, ability)}>
                    {name}
                </h6>
            )}
            {!header && (
                <p onClick={() => handleOpen(bonus, ability)}>
                    {name}
                </p>
            )}
            <span className="tooltiptext">
                <p>Click to roll!</p>
            </span>
        </div>
    );
    
};

export const TooltipEdit = props => {
    const { field } = props;

    return(
        <div className="tooltip-edit">
            <h2 className="main-stats">{field}</h2>
            <span className="tooltiptext">
                <p>Click to edit!</p>
            </span>
        </div>
    );
};

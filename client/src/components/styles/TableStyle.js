import React from 'react';

export const TableStyle = props => {
    const { children } = props;

    return(
        <div 
            style={{
                margin: "2em auto",
                width: "50vw",
            }}
        >
            {children}
        </div>
    );
};

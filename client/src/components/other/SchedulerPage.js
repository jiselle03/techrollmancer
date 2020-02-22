import React, { useState, useEffect } from 'react';

import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

export const SchedulerPage = () => {

    return(
        <BackgroundImage 
            image={require('../../assets/d20.png')}
        >
            <MainStyle>
                <h1>
                    Scheduler
                </h1>

            </MainStyle>
        </BackgroundImage>
    );
};

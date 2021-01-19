import React from 'react';

import { BackgroundImage } from '../styles/Image';
import MainStyle from '../styles/MainStyle';

const NotFoundPage = () => {
    return (
        <BackgroundImage
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <MainStyle>
                <h1 style={{color: "maroon"}}>
                    404 Not Found
                </h1>
            </MainStyle>
        </BackgroundImage>
    );
};

export default NotFoundPage;
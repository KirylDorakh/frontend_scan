import React from 'react';

import cl from './UI/MainPage/About/About.module.css'
import Carousel from "./UI/Carousel/Carousel";

const ReasonsList = () => {

    return (
        <div className={cl.reasons}>
            <Carousel />
        </div>
    );
};

export default ReasonsList;
import React from 'react';
import Reason from "./UI/MainPage/Reason/Reason";

import cl from './UI/MainPage/About/About.module.css'
import SimpleSlider from "./UI/Slider/SimpleSlider";

const ReasonsList = () => {
    return (
        <div className={cl.reasons}>
            <SimpleSlider/>
            <Reason/>
        </div>
    );
};

export default ReasonsList;
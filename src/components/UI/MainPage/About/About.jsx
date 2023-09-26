import React from 'react';

import ReasonsImage from '../../../../img/main/reasons.svg'

import cl from './About.module.css'

const About = () => {
    return (
        <div className={cl.section}>
            <h1 className={cl.title}>Почему именно мы</h1>
            <div className={cl.reasons}>
                <div className={cl.reason}>Reason1</div>
                <div className={cl.reason}>Reason2</div>
                <div className={cl.reason}>Reason3</div>
            </div>
            <div className={cl.imageContainer}>
                <img src={ReasonsImage} alt="reasons"/>
            </div>
        </div>
    );
};

export default About;
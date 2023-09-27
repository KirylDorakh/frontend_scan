import React from 'react';

import ReasonsImage from '../../../../img/main/reasons.svg'

import cl from './About.module.css'
import ReasonsList from "../../../ReasonsList";

const About = () => {
    return (
        <div className={cl.section}>
            <h1 className={cl.title}>Почему именно мы</h1>
            <ReasonsList />
            <div className={cl.imageContainer}>
                <img src={ReasonsImage} alt="reasons"/>
            </div>
        </div>
    );
};

export default About;
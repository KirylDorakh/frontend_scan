import React from 'react';
import cl from "./Rates.module.css";
import RatesList from "../../../RatesList";



const Rates = () => {
    return (
        <div className={cl.section}>
            <h1 className={cl.title}>наши тарифы</h1>
            <RatesList />
        </div>
    );
};

export default Rates;
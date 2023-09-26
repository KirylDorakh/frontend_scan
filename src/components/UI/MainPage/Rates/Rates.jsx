import React from 'react';
import cl from "./Rates.module.css";


const Rates = () => {
    return (
        <div className={cl.section}>
            <h1 className={cl.title}>наши тарифы</h1>
            <div className={cl.rates}>
                <div className={cl.rate}>Rate 1</div>
                <div className={cl.rate}>Rate 2</div>
                <div className={cl.rate}>Rate 3</div>
            </div>
        </div>
    );
};

export default Rates;
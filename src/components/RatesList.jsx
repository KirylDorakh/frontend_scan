import React from 'react';
import cl from "./UI/MainPage/Rates/Rates.module.css";

import {ratesInfo} from "../utils/ratesInfo";
import Rate from "./UI/MainPage/Rate/Rate";

const RatesList = () => {
    return (
        <div className={cl.rates}>
            {
                ratesInfo.map(rate =>
                    <Rate key={rate.title} rate={rate}/>
                )
            }
        </div>
    );
};

export default RatesList;
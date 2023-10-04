import React from 'react';

import cl from "./Summary.module.css";

const Summary = () => {
    return (
        <div className={cl.mainSummary}>
            <h1>Общая сводка</h1>
            <p>Найдено 4 221 вариантов</p>
            <div>
                Carusel
            </div>
        </div>
    );
};

export default Summary;
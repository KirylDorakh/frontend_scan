import React from 'react';
import cl from './Title.module.css';

import ResultImg from '../../../../img/result/result.svg'

const Title = () => {
    return (
        <div className={cl.top}>
            <div className={cl.text}>
                <h1 className={cl.title}>
                    Ищем. Скоро будут результаты
                </h1>
                <p className={cl.info}>
                    Поиск может занять некоторое время, просим сохранять терпение.
                </p>
            </div>
            <div className={cl.resultImg}>
                <img src={ResultImg} alt="result"/>
            </div>
        </div>
    );
};

export default Title;
import React from 'react';
import {Link} from "react-router-dom";

import cl from "./Service.module.css"
import ServiceImg from '../../../../img/main/service.svg'
import MainButton from "../../Button/MainButton";

const Service = () => {
    return (
        <div className={cl.section}
             style={{backgroundImage: `url(${ServiceImg})`}}
        >
            <h1 className={cl.title}>сервис по поиску публикаций о компании по его ИНН</h1>
            <div className={cl.info}>
                <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                <MainButton link={'search'}>Запросить данные</MainButton>
            </div>
        </div>
    );
};

export default Service;
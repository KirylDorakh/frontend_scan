import React from 'react';

import cl from "./Service.module.css"
import ServiceImg from '../../../../img/main/service.svg'
import MainButton from "../../Button/MainButton";
import {useSelector} from "react-redux";

const Service = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    return (
        <div className={cl.section}
             style={{backgroundImage: `url(${ServiceImg})`}}
        >
            <h1 className={cl.title}>сервис по поиску публикаций о компании по его ИНН</h1>
            <div className={cl.info}>
                <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                { isAuth ?
                    <MainButton link={'search'}>Запросить данные</MainButton>
                    :
                    <div></div>
                }

            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import cl from "./Left.module.css";
import SearchForm from "./SearchForm/SearchForm";


const LeftSide = () => {
    return (
        <div className={cl.leftSide}>
            <h1 className={cl.title}>
                Найдите необходимые данные в пару кликов.
            </h1>
            <div className={cl.info}>
                <p>Задайте параметры поиска.</p>
                <p>Чем больше заполните, тем точнее поиск</p>
            </div>
            <div className={cl.search}>
                <SearchForm />
            </div>
        </div>
    );
};

export default LeftSide;
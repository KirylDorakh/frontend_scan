import React from 'react';
import cl from "./HeaderAuth.module.css";
import {Link} from "react-router-dom";

const HeaderAuth = () => {
    return (
        <div className={cl.headerAuth}>
            <Link className={cl.authButton} to={'#'}>Зарегистрироваться</Link>
            <div className={cl.line}/>
            <Link className={cl.loginButton} to={'login'}>Войти</Link>
        </div>
    );
};

export default HeaderAuth;
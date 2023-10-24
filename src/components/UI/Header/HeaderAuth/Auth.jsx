import React from 'react';
import cl from "../Header.module.css";
import {Link} from "react-router-dom";

const Auth = ({handleClick}) => {
    return (
        <div className={cl.headerAuth}>
            <Link className={cl.authButton} to={'#'}>Зарегистрироваться</Link>
            <div className={cl.line}/>
            <Link className={cl.loginButton}
                  to={'login'}
                  onClick={handleClick}
            >
                Войти
            </Link>
        </div>
    );
};

export default Auth;
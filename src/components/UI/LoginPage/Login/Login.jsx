import React from 'react';
import {Link} from "react-router-dom";

import LoginImg from '../../../../img/login/Characters.svg'
import LockImg from '../../../../img/login/lock.svg'

import cl from './Login.module.css'

import LoginForm from "../LoginForm/LoginForm";
import SocialLogin from "../SocialLogin/SocialLogin";
import {useSelector} from "react-redux";


const Login = () => {
    const checkedInput = useSelector(state => state.navMenu.checkedInput)
    return (
        <div className={cl.section}>

            <h1 className={cl.title}>
                Для оформления подписки
                на тариф, необходимо авторизоваться.
            </h1>
            <div className={cl.characters}>
                <img src={LoginImg} alt='login'/>
            </div>

            <div className={cl.loginContainer}>

                <div className={cl.formContainer} style={checkedInput ? {zIndex: -1, opacity: 0} : {}}>
                    <div className={cl.loginLinks}>
                        <div className={cl.loginLinkContainer}>
                            <Link className={cl.loginLink} to={'/login'}>Войти</Link>
                        </div>
                        <div className={cl.regisLinkContainer}>
                            <Link className={cl.regisLink} to={'#'}>Зарегистрироваться</Link>
                        </div>

                    </div>

                    <div className={cl.loginForm}>
                        <LoginForm />
                        <Link to={'#'} className={cl.passwordLink}>Восстановить пароль</Link>
                        <SocialLogin />
                    </div>

                    <div className={cl.loginImage}>
                        <img src={LockImg} alt='lock'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
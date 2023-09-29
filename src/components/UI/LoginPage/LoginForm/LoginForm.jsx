import React from 'react';

import cl from './LoginForm.module.css'
import FormButton from "../../FormButton/FormButton";
import FormInput from "../../FormInput/FormInput";

const LoginForm = () => {
    return (
        <form className={cl.loginForm }>
            <p>Логин или номер телефона:</p>
            <FormInput type="text" required />
            <p>Пароль:</p>
            <FormInput type="password" required />
            <FormButton style={{marginTop: 30}} type="submit">Войти</FormButton>
        </form>
    );
};

export default LoginForm;
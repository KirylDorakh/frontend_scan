import React from 'react';

import cl from './LoginForm.module.css'
import FormButton from "../../FormButton/FormButton";
import FormInput from "../../FormInput/FormInput";

import UserService from "../../../../API/UserService";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../../../reducers/authReducer";

const LoginForm = () => {

    const dispatch = useDispatch()
    const expire = useSelector(state => state.auth.expire)

    const handleClick = async (event) => {
        event.preventDefault()
        console.log(event)
        const response = await UserService.login('sf_student4', 'Br1+tbG')
        dispatch(setAuth({isAuth: true, ...response.data}))
    }

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <form className={cl.loginForm }>
            <p>Логин или номер телефона:</p>
            <FormInput
                onChange={handleChange}
                type="text"
                required
            />
            <p>Пароль:</p>
            <FormInput
                onChange={handleChange}
                type="password"
                required
            />
            <FormButton
                onClick={handleClick}
                style={{marginTop: 30}}
                type="submit"
            >
                Войти
            </FormButton>
        </form>
    );
};

export default LoginForm;
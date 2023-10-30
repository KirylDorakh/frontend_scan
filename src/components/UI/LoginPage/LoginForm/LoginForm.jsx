import React, {useState} from 'react';

import cl from './LoginForm.module.css'
import FormButton from "../../FormButton/FormButton";
import FormInput from "../../FormInput/FormInput";

import AuthService from "../../../../API/services/AuthService";
import {useDispatch} from "react-redux";
import {setAuth} from "../../../../reducers/authReducer";
import {useNavigate} from "react-router-dom";
import UserService from "../../../../API/services/UserService";
import {setUser} from "../../../../reducers/userReducer";

const LoginForm = () => {
    const [loginStr, setLoginStr] = useState('');
    const [passwordStr, setPasswordStr] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleClick = async (event) => {
        event.preventDefault()
        try {
            const response = await AuthService.login(loginStr, passwordStr)
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('expire', response.data.expire)
            dispatch(setAuth({isAuth: true, ...response.data}))

            const responseUserData = await UserService.fetchUser()
            dispatch(setUser(response.data.eventFiltersInfo))
            navigate('/')
        } catch (e){
            console.log(e)
        }
    }


    return (
        <form className={cl.loginForm }>
            <p>Логин или номер телефона:</p>
            <FormInput
                onChange={event => setLoginStr(event.target.value)}
                type="text"
                required
            />
            <p>Пароль:</p>
            <FormInput
                onChange={event => setPasswordStr(event.target.value)}
                type="password"
                required
            />

            <FormButton
                onClick={handleClick}
                style={{marginTop: 30}}
                type="submit"
                blockedBtn={!!(loginStr && passwordStr)}
            >
                Войти
            </FormButton>

        </form>
    );
};

export default LoginForm;
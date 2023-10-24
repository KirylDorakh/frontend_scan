import React, {useEffect} from 'react';

import {Outlet} from "react-router-dom";

import './styles/App.css'
import Header from "./components/UI/Header/Header.jsx";
import Main from "./components/UI/Main/Main";
import Footer from "./components/UI/Footer/Footer";
import {useDispatch} from "react-redux";
import {setAuth} from "./reducers/authReducer";
import UserService from "./API/services/UserService";
import {setUser} from "./reducers/userReducer";


const App = () => {
    const dispatch = useDispatch()

    // загрузка данных пользователя
    const loadUserData = async () => {
        const response = await UserService.fetchUser()
        // console.log(response.data.eventFiltersInfo)
        dispatch(setUser(response.data.eventFiltersInfo))
    }

    // проверка токена
    useEffect(() => {
        const expire = Date.parse(localStorage.getItem('expire'))
        if (localStorage.getItem('token') && Date.now() < expire){
            dispatch(setAuth({isAuth: true, expire: expire}))
            loadUserData()
        } else {
            dispatch(setAuth({isAuth: false, expire: ''}))
            localStorage.clear()
        }
    }, [])

    return (
        <>
            <Header />
            <Main><Outlet/></Main>
            <Footer/>
        </>
    );
};

export default App;
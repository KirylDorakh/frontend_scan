import React, {useEffect} from 'react';

import cl from'./Header.module.css'

import Navbar from "./Navbar/Navbar.jsx";
import HeaderAuth from "./HeaderAuth/HeaderAuth.jsx";

import LogoImg from '../../../img/header/logo.svg'
import CheckedInputLogo from '../../../img/header/checkedInput_logo.svg'

import {Link} from "react-router-dom";
import MenuButton from "./MenuButton/MenuButton";
import {useDispatch, useSelector} from "react-redux";
import {setCheckedInput} from "../../../reducers/navMenuReducer";
import {setAuth} from "../../../reducers/authReducer";
import Info from "./Info/Info";
import {setIsFetching, setUser} from "../../../reducers/userReducer";
import UserService from "../../../API/services/UserService";


const Header = () => {
    const dispatch = useDispatch()

    const checkedInput = useSelector(state => state.navMenu.checkedInput)
    const checkedAuth = useSelector(state => state.auth.isAuth)
    const isFetching = useSelector(state => state.userInfo.isFetching)

    const backgroundImage = checkedInput ? CheckedInputLogo : LogoImg

    // загрузка данных пользователя
    const loadUserData = async () => {
        const response = await UserService.fetchUser()
        dispatch(setUser(response.data.eventFiltersInfo))
    }

    useEffect(() => {
        dispatch(setIsFetching(checkedAuth))
        if (checkedAuth) {
            loadUserData()
        }
    }, [checkedAuth])

    const handleClick = () => {
        dispatch(setCheckedInput(false))
    }

    function handleLogOut() {
        dispatch(setAuth({isAuth: false, expire: ''}))
        dispatch(setUser({usedCompanyCount: 0, companyLimit: 0,}))
        localStorage.clear()
    }

    return (
        <header className={cl.header} style={checkedInput ? {position: "fixed"} : {}}>
            <Link to='/'
                  className={cl.headerLogo}
                  style={{backgroundImage: `url(${backgroundImage})`}}
                  onClick={handleClick}
            >

            </Link>

            {checkedAuth ? <Info isFetching={isFetching}/> : <div></div>}

            <MenuButton checkedInput={checkedInput}/>


            <div className={cl.headerLinks }>
                <Navbar handleClick={handleClick}/>
                <HeaderAuth
                    handleClick={handleClick}
                    handleLogOut={handleLogOut}
                    checkedAuth={checkedAuth}
                />
            </div>


            <div className={cl.background}></div>

        </header>
    );
};

export default Header;
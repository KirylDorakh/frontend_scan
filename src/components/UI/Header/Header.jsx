import React from 'react';

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


const Header = () => {
    const dispatch = useDispatch()

    const checkedInput = useSelector(state => state.navMenu.checkedInput)
    const checkedAuth = useSelector(state => state.auth.isAuth)

    const backgroundImage = checkedInput ? CheckedInputLogo : LogoImg

    const handleClick = () => {
        dispatch(setCheckedInput(false))
    }

    function handleLogOut() {
        dispatch(setAuth({isAuth: false, expire: ''}))
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

            <Info/>

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
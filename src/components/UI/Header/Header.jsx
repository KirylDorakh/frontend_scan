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


const Header = () => {
    const dispatch = useDispatch()

    const checkedInput = useSelector(state => state.navMenu.checkedInput)
    const backgroundImage = checkedInput ? CheckedInputLogo : LogoImg

    const handleClick = () => {
        dispatch(setCheckedInput(false))
    }

    return (
        <header className={cl.header} style={checkedInput ? {position: "fixed"} : {}}>
            <Link to='/'
                  className={cl.headerLogo}
                  style={{backgroundImage: `url(${backgroundImage})`}}
                  onClick={handleClick}
            >
            </Link>

            <MenuButton checkedInput={checkedInput}/>

            <div className={cl.headerLinks }>
                <Navbar/>
                <HeaderAuth/>
            </div>

            <div className={cl.background}></div>

        </header>
    );
};

export default Header;
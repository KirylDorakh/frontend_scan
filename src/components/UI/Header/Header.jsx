import React, {useState} from 'react';

import cl from'./Header.module.css'

import Navbar from "./Navbar/Navbar.jsx";
import HeaderAuth from "./HeaderAuth/HeaderAuth.jsx";

import LogoImg from '../../../img/logo.svg'
import {Link} from "react-router-dom";
import MenuButton from "./MenuButton/MenuButton";


const Header = () => {
    const [check, setCheck] = useState(false)


    return (
        <header className={cl.header}>
            <Link to='main' className={cl.headerLogo}>
                <img src={LogoImg} alt="Logo Img"/>
            </Link>
            <Navbar check={check}/>
            <HeaderAuth check={check}/>
            <MenuButton setCheck={setCheck} check={check}/>
        </header>
    );
};

export default Header;
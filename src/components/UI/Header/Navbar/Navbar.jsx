import React from 'react';
import {Link} from "react-router-dom";

import cl from '../Header.module.css'

const Navbar = ({handleClick}) => {
    return (
        <nav className={cl.navbar}>
            <Link className={cl.navLink} to={'/'} onClick={handleClick}>Главная</Link>
            <Link className={cl.navLink} to={'#'}>Тарифы</Link>
            <Link className={cl.navLink} to={'#'}>FAQ</Link>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import {Link} from "react-router-dom";

import cl from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={cl.navbar}>
            <Link className={cl.navLink} to={'#'}>Главная</Link>
            <Link className={cl.navLink} to={'#'}>Тарифы</Link>
            <Link className={cl.navLink} to={'#'}>FAQ</Link>
        </nav>
    );
};

export default Navbar;
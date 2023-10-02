import React from 'react';
import {NavLink} from "react-router-dom";

import cl from '../Header.module.css'

const activeLink = ({isActive, isPending}) => isActive
    ? cl.activeNavLink
    : isPending ? cl.navLink : cl.navLink

const Navbar = ({handleClick}) => {
    return (
        <nav className={cl.navbar}>
            <NavLink className={activeLink}
                     to={''} onClick={handleClick}>Главная</NavLink>
            <NavLink className={cl.navLink} to={'#'}>Тарифы</NavLink>
            <NavLink className={cl.navLink} to={'#'}>FAQ</NavLink>
        </nav>
    );
};

export default Navbar;
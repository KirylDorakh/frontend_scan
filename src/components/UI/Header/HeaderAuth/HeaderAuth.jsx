import React from 'react';
import cl from "../Header.module.css";
import {Link} from "react-router-dom";
import UserInfo from "./UserInfo";
import Auth from "./Auth";


const HeaderAuth = ({handleClick, handleLogOut, checkedAuth}) => {
    if(checkedAuth) {
        return (
            <UserInfo handleLogOut={handleLogOut}/>
        )
    } else {
        return (
            <Auth handleClick={handleClick}/>
        );
    }
};

export default HeaderAuth;
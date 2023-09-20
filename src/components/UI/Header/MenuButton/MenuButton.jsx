import React, {useState} from 'react';

import cl from './MenuButton.module.css'

const MenuButton = ({setCheck}) => {

    const handleCheck = (e) => {
        setCheck(e.target.checked)
    }

    return (
        <div className={cl.humburger}>
            <input type="checkbox" className={cl.menuBtn} id="menu-btn" onClick={handleCheck}/>
            <label htmlFor="menu-btn" className={cl.menuIcon}>
                <span className={cl.menuLine}></span>
            </label>
        </div>
    );
};

export default MenuButton;
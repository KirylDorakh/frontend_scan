import React from 'react';

import cl from '../Header.module.css'
import {useDispatch} from "react-redux";
import {setCheckedInput} from "../../../../reducers/navMenuReducer";

const MenuButton = ({checkedInput}) => {
    const dispatch = useDispatch()
    const handleCheck = (e) => {
        dispatch(setCheckedInput(e.target.checked))
    }


    return (
        <>
            <input type="checkbox"
                   className={cl.menuBtn}
                   id="menu-btn"
                   onClick={handleCheck}
                   checked={checkedInput}
            />
            <label htmlFor="menu-btn" className={cl.menuIcon}>
                <span className={cl.menuLine}></span>
            </label>
        </>
    );
};

export default MenuButton;
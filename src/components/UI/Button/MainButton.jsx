import React from 'react';

import cl from './MainButton.module.css'
import {Link} from "react-router-dom";

const MainButton = ({link, children, changeClass=false}) => {

    return (
        <Link to={link}
              className={changeClass ? cl.link : `${cl.link} ${cl.used}`}
        >{children}</Link>
    );
};

export default MainButton;
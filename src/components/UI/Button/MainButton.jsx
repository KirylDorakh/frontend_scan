import React from 'react';

import cl from './MainButton.module.css'
import {Link} from "react-router-dom";

const MainButton = ({link, children}) => {
    return (
        <Link to={link}
              className={cl.link}
        >{children}</Link>
    );
};

export default MainButton;
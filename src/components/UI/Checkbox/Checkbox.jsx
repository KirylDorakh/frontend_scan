import React, {useState} from 'react';

import cl from'./Checkbox.module.css'
import checkImg from '../../../img/search/check.png'

const Checkbox = ({children, forId}, props) => {
    const [check, setCheck] = useState(false)

    const handleClick = (e) => {
        setCheck(e.target.checked)
    }

    return (
        <div className={cl.checkbox}>
            <input type="checkbox"
                   id={forId}
                   onClick={handleClick}
                   style={check ? {backgroundImage: `url(${checkImg}`} : {backgroundImage: 'none'}}
            />
            <label htmlFor={forId}>{ children }</label>
        </div>
    );
};

export default Checkbox;
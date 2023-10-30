import React, {useEffect} from 'react';
import cl from "./FormButton.module.css"

const FormButton = ({children, blockedBtn, ...props}) => {

    return (
        <button {...props}
                disabled={!blockedBtn}
                className={blockedBtn ? cl.myBtn : cl.blockedBtn}
        >
            {children}
        </button>
    );
};

export default FormButton;
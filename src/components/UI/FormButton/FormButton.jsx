import React from 'react';
import cl from "./FormButton.module.css"

const FormButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.myBtn}>
            {children}
        </button>
    );
};

export default FormButton;
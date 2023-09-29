import React from 'react';
import cl from './FormInput.module.css'

const FormInput = (props) => {
    return (
        <input className={cl.FormInput} {...props}/>
    );
};

export default FormInput;
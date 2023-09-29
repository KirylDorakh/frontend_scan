import React from 'react';
import FormInput from "../FormInput/FormInput";

const Checkbox = ({children, forId}, props) => {
    return (
        <div>
            <FormInput type="checkbox" id={forId}/>
            <label for={forId}>{ children }</label>
        </div>
    );
};

export default Checkbox;
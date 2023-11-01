import React, {useEffect, useState} from 'react';
import FormInput from "../../../../FormInput/FormInput";

import cl from '../InnValidator/inn.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setLimit} from "../../../../../../reducers/searchReducer";

const Limit = ({isLimitValid, setIsLimitValid}) => {

    const dispatch = useDispatch()

    const [lim, setLim] = useState(0)


    const handleInputChange = (e) => {
        const inputValue = parseInt(e.target.value);
        if(inputValue >= 1 && inputValue <= 1000){
            setIsLimitValid(true)
        } else if(!inputValue){
            setIsLimitValid(true)
        }else {
            setIsLimitValid(false)
        }
        setLim(inputValue)
    }

    useEffect(() => {
        if(isLimitValid && lim){
            dispatch(setLimit(lim))
        }else{
            dispatch(setLimit(0))
        }
    }, [lim])



    return (
        <div className={isLimitValid ? cl.inn : cl.no}>
            <FormInput
                type="number"
                placeholder="от 1 до 1000"
                required
                onChange={handleInputChange}

                // onBlur={checkLimit}
            />
        </div>
    );
};

export default Limit;
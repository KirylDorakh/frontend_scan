import React, {useEffect, useState} from 'react';
import FormInput from "../../../../FormInput/FormInput";

import cl from './inn.module.css'
import {useDispatch} from "react-redux";
import {setValInn} from "../../../../../../reducers/searchReducer";

const InnValidator = ({setIsInnValid, isInnValid}) => {

    const dispatch = useDispatch()

    const [inn, setInn] = useState('')

    const calculateCheckDigit = (inn, coefficients) => {
        let sum = 0;
        for (let i = 0; i < coefficients.length; i++) {
            sum += parseInt(inn[i]) * coefficients[i];
        }
        return sum % 11;
    };

    const validateInn = () => {
        if (inn.length === 10) {
            const controlDigit = calculateCheckDigit(inn.slice(0, 9), [2, 4, 10, 3, 5, 9, 4, 6, 8]);
            if (controlDigit === parseInt(inn[9])) {
                setIsInnValid(true);
            } else {
                setIsInnValid(false);
            }
        } else if (inn.length === 12) {
            const controlDigit1 = calculateCheckDigit(inn.slice(0, 10), [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
            const controlDigit2 = calculateCheckDigit(inn.slice(0, 11), [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
            if (controlDigit1 === parseInt(inn[10]) && controlDigit2 === parseInt(inn[11])) {
                setIsInnValid(true);
            } else {
                setIsInnValid(false);
            }
        } else {
            setIsInnValid(false)
        }
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (/^\d*$/.test(inputValue)) {
            setInn(inputValue);
        }
    };

    useEffect(() => {
        if(isInnValid){
            dispatch(setValInn(inn))
        }
    }, [inn])

    return (
        <div className={isInnValid ? cl.inn : cl.no}>
            <FormInput
                type="number"
                placeholder="10 цифр"
                required
                onChange={handleInputChange}

                onBlur={validateInn}
            />
        </div>
    );
};

export default InnValidator;
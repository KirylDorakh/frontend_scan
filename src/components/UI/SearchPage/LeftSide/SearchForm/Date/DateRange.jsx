import React, {useEffect, useState} from 'react';
import cl from "../SearchForm.module.css";
import c from '../InnValidator/inn.module.css'
import FormInput from "../../../../FormInput/FormInput";
import {useDispatch} from "react-redux";
import {setDate} from "../../../../../../reducers/searchReducer";

const DateRange = ({setIsRangeValid, isRangeValid}) => {
    const dispatch = useDispatch()

    const [startDate, setStartDate] = useState('')
    const [finishDate, setFinishDate] = useState('')

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (e.target.name === "start"){
            setStartDate(inputValue)
        } else {
            setFinishDate(inputValue)
        }
    }

    useEffect(() => {
        const start = Date.parse(startDate)
        const finish = Date.parse(finishDate)

        if(!startDate && !finishDate){
            setIsRangeValid(true)
        } else {
            setIsRangeValid(false)
            if(start < finish) {
                setIsRangeValid(true)
                dispatch(setDate({
                    startDate: startDate, finishDate: finishDate
                }))
            }
        }
    }, [startDate, finishDate])

    return (
        <div>
            <p>Диапазон поиска*</p>
            <div className={cl.date}>
                <div className={isRangeValid ? c.inn : c.no}>
                    <FormInput
                        type="date"
                        required
                        name="start"
                        onChange={handleInputChange}
                    />
                </div>
                <div className={isRangeValid ? c.inn : c.no}>
                    <FormInput
                        type="date"
                        required
                        name="finish"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default DateRange;
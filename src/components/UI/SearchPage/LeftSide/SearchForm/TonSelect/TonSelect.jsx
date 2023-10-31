import React from 'react';
import cl from "../SearchForm.module.css";
import c from  '../InnValidator/inn.module.css'
import {useDispatch} from "react-redux";
import {setTon} from "../../../../../../reducers/searchReducer";

const tonOptions = {
    'Любая': 'any',
    'Позитивная': 'pos',
    'Негативная': 'neg'
};

const TonSelect = () => {

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        dispatch(setTon(tonOptions[inputValue]))
    };

    return (
        <div className={c.inn}>
            <select
                className={cl.select}
                onChange={handleInputChange}
                required>
                {Object.keys(tonOptions).map((option) => (
                    <option key={tonOptions[option]} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TonSelect;
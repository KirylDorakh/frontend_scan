import React from 'react';
import FormInput from "../../../FormInput/FormInput";
import {searchCheckboxes} from "../../../../../utils/searchCheckboxes";
import Checkbox from "../../../Checkbox/Checkbox";
import FormButton from "../../../FormButton/FormButton";

import cl from './SearchForm.module.css'

const SearchForm = () => {
    return (
        <form className={cl.searchForm}>
            <div className={cl.inputs}>
                <p>ИНН компании *</p>
                <FormInput type="number" placeholder="10 цифр" required/>
                <p>Тональность</p>
                <select className={cl.select} required>
                    <option>Любая</option>
                    <option>Позитивная</option>
                    <option>Негативная</option>
                </select>
                <p>Количество документов в выдаче  *</p>
                <FormInput type="number" placeholder="от 1 до 1000" required/>
                <div>
                    <p>Диапазон поиска*</p>
                    <div className={cl.date}>
                        <FormInput type="date" required/>
                        <FormInput type="date" required/>
                    </div>
                </div>
            </div>

            <div className={cl.checkboxes}>
                {searchCheckboxes.map(check =>
                    <Checkbox key={check.id} forId={check.id}>{check.name}</Checkbox>
                )}
            </div>

            <div className={cl.submit}>
                <FormButton>Поиск</FormButton>
                <p>* Обязательные к заполнению поля</p>
            </div>

        </form>
    );
};

export default SearchForm;
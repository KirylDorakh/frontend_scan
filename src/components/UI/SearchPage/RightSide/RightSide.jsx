import React from 'react';
import cl from "./Right.module.css";
import FormInput from "../../FormInput/FormInput";
import {searchCheckboxes} from "../../../../utils/searchCheckboxes";
import Checkbox from "../../Checkbox/Checkbox";
import FormButton from "../../FormButton/FormButton";

const RightSide = () => {
    return (
        <div className={cl.rightSide}>
            <h1 className={cl.title}>
                Найдите необходимые данные в пару кликов.
            </h1>
            <div className={cl.info}>
                <p>Задайте параметры поиска.</p>
                <p>Чем больше заполните, тем точнее поиск</p>
            </div>
            <div className={cl.searchForm}>
                <form>
                    <p>ИНН компании *</p>
                    <FormInput type="number" placeholder="10 цифр"/>
                    <p>Тональность</p>
                    <select>
                        <option>Любая</option>
                        <option>2</option>
                    </select>
                    <p>Количество документов в выдаче  *</p>
                    <FormInput type="number"/>
                    <div>
                        <p>Диапазон поиска*</p>
                        <FormInput type="date"/>
                        <FormInput type="date"/>
                    </div>

                    <div>
                        {searchCheckboxes.map(check =>
                            <Checkbox key={check.id} forId={check.id}>{check.name}</Checkbox>
                        )}
                    </div>

                    <div>
                        <FormButton />
                        <p>* Обязательные к заполнению поля</p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default RightSide;
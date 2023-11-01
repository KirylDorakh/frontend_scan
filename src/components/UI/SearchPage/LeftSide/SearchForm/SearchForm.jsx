import React, {useEffect, useState} from 'react';
import {searchCheckboxes} from "../../../../../utils/searchCheckboxes";
import Checkbox from "../../../Checkbox/Checkbox";
import FormButton from "../../../FormButton/FormButton";

import cl from './SearchForm.module.css'

import SearchService from "../../../../../API/services/SearchService";
import {searchBody} from "../../../../../utils/searchBody";
import InnValidator from "./InnValidator/InnValidator";

import TonSelect from "./TonSelect/TonSelect";
import Limit from "./Limit/Limit";
import DateRange from "./Date/DateRange";
import {useSelector} from "react-redux";

const SearchForm = () => {

    const inn = useSelector(state => state.search.inn)
    const limit = useSelector(state => state.search.limit)
    const startDate = useSelector(state => state.search.startDate)
    const endDate = useSelector(state => state.search.endDate)

    const start = Date.parse(startDate)
    const end = Date.parse(endDate)


    const [isValid, setIsValid] = useState(false)
    const [isInnValid, setIsInnValid] = useState(true)
    const [isLimitValid, setIsLimitValid] = useState(true)
    const [isRangeValid, setIsRangeValid] = useState(true)

    const handleClick = async (event) => {
        event.preventDefault()
        try {
            const response = await SearchService.getHistograms(searchBody)

            console.log(response)
            // dispatch(setAuth({isAuth: true, ...response.data}))
            //
            // const responseUserData = await UserService.fetchUser()
            // dispatch(setUser(response.data.eventFiltersInfo))
            // navigate('/')
        } catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        if (inn && limit && start && end){
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [inn, limit, start, end])

    return (
        <form className={cl.searchForm}>
            <div className={cl.inputs}>
                <p>ИНН компании *</p>
                {/*7710137066*/}
                <InnValidator setIsInnValid={setIsInnValid} isInnValid={isInnValid}/>

                <p>Тональность</p>
                <TonSelect />

                <p>Количество документов в выдаче  *</p>
                <Limit isLimitValid={isLimitValid} setIsLimitValid={setIsLimitValid}/>

                <DateRange isRangeValid={isRangeValid} setIsRangeValid={setIsRangeValid}/>
            </div>

            <div className={cl.checkboxes}>
                {searchCheckboxes.map(check =>
                    <Checkbox key={check.id} forId={check.id}>{check.name}</Checkbox>
                )}
            </div>

            <div className={cl.submit}>
                <FormButton
                    onClick={handleClick}
                    type="submit"
                    blockedBtn={isValid}
                >
                    Поиск
                </FormButton>
                <p>* Обязательные к заполнению поля</p>
            </div>

        </form>
    );
};

export default SearchForm;
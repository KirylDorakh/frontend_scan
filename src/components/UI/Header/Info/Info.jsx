import React from 'react';
import cl from "./Info.module.css";
import {useSelector} from "react-redux";

const Info = () => {

    const usedCompanyCount = useSelector(state => state.userInfo.usedCompanyCount)
    const companyLimit = useSelector(state => state.userInfo.companyLimit)

    return (
        <div className={cl.info}>
            <div className={cl.description}>
                <p>Использовано компаний </p>
                <p>Лимит по компаниям</p>

            </div>
            <div className={cl.numbers}>
                <p>{usedCompanyCount}</p>
                <p className={cl.limit}>{companyLimit}</p>
            </div>

        </div>
    );
};

export default Info;
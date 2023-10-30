import React from 'react';
import cl from "./Info.module.css";
import c from "./Loader.module.css"
import {useSelector} from "react-redux";

const Info = ({isFetching}) => {

    const usedCompanyCount = useSelector(state => state.userInfo.usedCompanyCount)
    const companyLimit = useSelector(state => state.userInfo.companyLimit)

    return (
        <div className={cl.info}>
            {
                isFetching ?
                    <div className={cl.fetching}>
                        <div className={c.loader}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    :
                    <div className={cl.showInfo}>
                        <div className={cl.description}>
                            <p>Использовано компаний </p>
                            <p>Лимит по компаниям</p>
                        </div>
                        <div className={cl.numbers}>
                            <p>{usedCompanyCount}</p>
                            <p className={cl.limit}>{companyLimit}</p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Info;
import React, {useEffect, useState} from 'react';

import cl from './Rate.module.css'
import MainButton from "../../Button/MainButton";

import CheckImg from '../../../../img/rates/check.svg'
import {useSelector} from "react-redux";

const Rate = ({rate}) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const [current, changeCurrent] = useState(rate.currentRate.current)

    const currentMain = {
        height: '100%',
        padding: '10px 30px 24px 30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        border: `2px solid ${rate.background}`,
        borderRadius: '0px 0px 10px 10px',
    }

    useEffect(() => {
        if(rate.title === "Beginner") {changeCurrent(isAuth)}
    }, [isAuth])

    return (
        <div className={cl.rate}>

            <div className={cl.rateHeader} style={{backgroundColor: rate.background}}>
                <div style={rate.title === "Business"
                        ? {color: "#FFF"}
                        : {}
                }>
                    <h3>{rate.title}</h3>
                    <p>{rate.description}</p>
                </div>
                <div>
                    <img src={rate.url}/>
                </div>
            </div>

            <div className={cl.rateMain} style={current ? currentMain : {}}>
                {current
                    ? <div className={cl.current}><p>{rate.currentRate.name}</p></div>
                    : <div><br/></div>
                }
                <div className={cl.ratePrice}>
                    <div className={cl.price}>
                        <p>{rate.price.discountPrice}</p>
                        <p className={cl.oldPrice}>{rate.price.price}</p>
                    </div>
                    { rate.title === "Business"
                        ? <div><br/></div>
                        :<div>{rate.price.plan}</div>
                    }
                </div>

                <div className={cl.rateIncludes}>
                    <p>{rate.body.include}</p>
                    <ol>
                        {rate.body.tips.map((tip, index) =>
                            <li key={index}>
                                <img src={CheckImg} alt="Check" />
                                {tip}
                            </li>
                        )}
                    </ol>
                </div>

                <div>
                    {current
                        ?
                        <MainButton link={'#'} >
                            Перейти в личный кабинет
                        </MainButton>
                        :
                        <MainButton link={'#'} changeClass={true}>
                            Подробнее
                        </MainButton>
                    }
                </div>
            </div>
        </div>
    );
};

export default Rate;
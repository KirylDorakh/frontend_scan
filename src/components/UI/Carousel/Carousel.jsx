import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {reasonsInfo} from "../../../utils/reasonsInfo";
import Reason from "../MainPage/Reason/Reason";
import React, {useEffect, useState} from "react";

import ArrowImg from '../../../img/arrow/arrow.svg'
import ArrowBackImg from '../../../img/arrow/arrow_back.svg'

import cl from './Carousel.model.css'

const Carousel = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowWidth)
        return () => {
            window.removeEventListener('resize', handleWindowWidth);
        };
    }, [])

    return (
        <>
            <button className="arrow-left arrow">
                <img src={ArrowBackImg} alt='arrow'/>
            </button>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={10}
                slidesPerView={windowWidth > 1021 ? 3 : 1}
                loop
                navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
            >
                {
                    reasonsInfo.map(reason =>
                        <SwiperSlide key={reason.id}>
                            <Reason  reason={reason}/>
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <button className="arrow-right arrow">
                <img src={ArrowImg} alt='arrow'/>
            </button>
        </>
    );
};

export default Carousel;
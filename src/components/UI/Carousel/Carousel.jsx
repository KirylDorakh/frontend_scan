import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {reasonsInfo} from "../../../utils/reasonsInfo";
import Reason from "../MainPage/Reason/Reason";
import React from "react";

import ArrowImg from '../../../img/arrow/arrow.svg'
import ArrowBackImg from '../../../img/arrow/arrow_back.svg'

import cl from './Carousel.model.css'

export default () => {
    return (
        <>
            <button className="arrow-left arrow">
                <img src={ArrowBackImg} alt='arrow'/>
            </button>
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={10}
                slidesPerView={3}
                loop
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    reasonsInfo.map(reason =>
                        <SwiperSlide>
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
import React from 'react';
import Service from "../components/UI/MainPage/Service/Service";
import About from "../components/UI/MainPage/About/About";
import Rates from "../components/UI/MainPage/Rates/Rates";

const MainPage = () => {
    return (
        <>
            <Service/>
            <About />
            <Rates />
        </>
    );
};

export default MainPage;
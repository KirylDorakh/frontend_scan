import React from 'react';

import {Outlet} from "react-router-dom";

import './styles/App.css'
import Header from "./components/UI/Header/Header.jsx";
import Main from "./components/UI/Main/Main";
import Footer from "./components/UI/Footer/Footer";



const App = () => {
    return (
        <>
            <Header />
            <Main><Outlet/></Main>
            <Footer/>
        </>
    );
};

export default App;
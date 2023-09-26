import React from 'react';
import cl from './Main.module.css'

const Main = ({children}) => {
    return (
        <main className={cl.mainPage}>
            {children}
        </main>
    );
};

export default Main;
import React from 'react';
import cl from './Docs.module.css'
import Doc from "../Doc/Doc";

const Docs = () => {
    return (
        <div className={cl.docs}>
            <h1>Список документов</h1>
            <Doc />
            <Doc />
        </div>
    );
};

export default Docs;
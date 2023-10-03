import React from 'react';
import cl from "./Result.module.css";

import Summary from "./Summary/Summary";
import Docs from "./Docs/Docs";
import Title from "./Title/Title";

const Result = () => {
    return (
        <div className={cl.section}>
            <Title />
            <Summary />
            <Docs />
        </div>
    );
};

export default Result;
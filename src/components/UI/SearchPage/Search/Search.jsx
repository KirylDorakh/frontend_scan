import React from 'react';

import cl from './Search.module.css'

import RightSide from "../RightSide/RightSide";
import LeftSide from "../LeftSide/LeftSide";

const Search = () => {
    return (
        <div className={cl.section}>
            <RightSide />

            <LeftSide />
        </div>
    );
};

export default Search;
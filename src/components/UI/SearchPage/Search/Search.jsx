import React from 'react';

import cl from './Search.module.css'

import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

const Search = () => {
    return (
        <div className={cl.section}>
            <LeftSide />

            <RightSide />
        </div>
    );
};

export default Search;
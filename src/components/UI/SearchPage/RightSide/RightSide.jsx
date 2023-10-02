import React from 'react';
import cl from "./Right.module.css";
import DocumentImg from "../../../../img/search/Document.svg";
import FoldersImg from "../../../../img/search/Folders.svg";
import RocketImg from "../../../../img/search/rocket.svg";

const RightSide = () => {
    return (
        <div className={cl.leftSide}>
            <div className={cl.twoImages}>
                <img src={DocumentImg} alt='document'/>
                <img src={FoldersImg} alt='folders'/>
            </div>
            <div className={cl.oneImage}>
                <img src={RocketImg} alt='rocket'/>
            </div>
        </div>
    );
};

export default RightSide;
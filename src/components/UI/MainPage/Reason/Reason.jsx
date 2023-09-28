import React from 'react';

import cl from './Reason.module.css'

const Reason = ({reason}) => {
    return (
        <div className={cl.reason}>
            <div className={cl.logoContainer}>
                <img src={reason.logo} alt="logo"/>
            </div>
            <div>
                {reason.body}
            </div>
        </div>
    );
};

export default Reason;
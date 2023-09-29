import React from 'react';
import {socialLoginLinks} from "../../../../utils/socailLoginLinks";

import cl from './SocialLogin.module.css'

const SocialLogin = () => {
    return (
        <div className={cl.socialLogin}>
            <p>Войти через:</p>
            <div className={cl.socialLoginButtons}>
                {socialLoginLinks.map(link =>
                    <button key={link.name} className={cl.socialLoginButton}>
                        <img src={link.url} alt={link.name}/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default SocialLogin;
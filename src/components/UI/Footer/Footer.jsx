import React from 'react';

import cl from './Footer.module.css'
import LogoFooterImg from "../../../img/header/logo_footer.svg";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footerLogo}>
                <img src={LogoFooterImg} alt="Logo Img"/>
            </div>
            <div className={cl.footerText}>
                <div className={cl.footerInfo}>
                    <p>г. Москва, Цветной б-р, 40</p>
                    <p>+7 495 771 21 11</p>
                    <p>info@skan.ru</p>
                </div>
                <div className={cl.footerCopyright}>
                    <p>Copyright. 2022</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
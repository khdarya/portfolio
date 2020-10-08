import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";



function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span>Darya</span>
                <div className={style.icons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <span>2020 Copyright</span>
            </div>
        </div>
    );
}

export default Footer;

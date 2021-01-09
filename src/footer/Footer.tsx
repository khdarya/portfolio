import React from 'react';
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.css";



function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span className={style.footerName}>Darya</span>
                <div className={style.icons}>
                    <a href="https://www.linkedin.com/in/darya-khakhlova-58ba7993/" className={style.icon}>LinkedIn</a>
                    <a href="https://github.com/khdarya" className={style.icon}>GitHub</a>
                    <a href="https://www.codewars.com/users/DaryaKha" className={style.icon}>Codewars</a>
                </div>
                <span>2021 Copyright</span>
            </div>
        </div>
    );
}

export default Footer;

import React from 'react';
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.css";



function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span className={style.footerName}>Darya</span>
                <div className={style.icons}>
                    <div className={style.icon}>LinkedIn</div>
                    <div className={style.icon}>Github</div>
                    <div className={style.icon}>Something</div>

                </div>
                <span >2020 Copyright</span>
            </div>
        </div>
    );
}

export default Footer;

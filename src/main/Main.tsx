import React from 'react';
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container} >
            <div className={style.text}>
                <span className={style.hiText}>Hi There</span>
                <h1 className={style.introText}>I am Darya Khakhlova</h1>
                <p className={style.devText}>A Front-End Developer</p>
            </div>
            <div className={style.photo}>
            </div>
            </div>
        </div>
    );
}

export default Main;
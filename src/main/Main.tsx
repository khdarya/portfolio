import React from 'react';
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <Fade>
                    <div className={style.greeting}>
                        <span className={style.hiText}>Hi There</span>
                        <span>I am Darya <span>Khakhlova</span></span>
                        <ReactTypingEffect text="A Front-End Developer"/>
                    </div>
                </Fade>
                <div className={style.photo}>
                    <div className={style.image}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
import React from 'react';
import style from './Remote.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import { Fade } from "react-awesome-reveal";

function Remote() {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <Fade>
                    <Title text={'Open for remote position'}/>
                </Fade>
                <button className={style.hireBtn}>HIRE ME</button>
            </div>
        </div>
    );
}

export default Remote;

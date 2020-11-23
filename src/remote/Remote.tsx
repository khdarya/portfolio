import React from 'react';
import style from './Remote.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";

function Remote() {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <Title text={'Open for remote position'}/>
                <button className={style.hireBtn}>HIRE ME</button>
            </div>
        </div>
    );
}

export default Remote;

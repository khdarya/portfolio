import React from 'react';
import style from './Remote.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Remote() {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <span>Open for remote position</span>
                <button>Hire me</button>
            </div>
        </div>
    );
}

export default Remote;

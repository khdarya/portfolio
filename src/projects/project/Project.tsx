import React from 'react';
import style from './Project.module.css';

type ProjectProps = {
    title: string
    projDescription: string
}

function Project(props: ProjectProps) {
    return (
        <div className={style.project}>
            <div className={style.commonView}>
            <div className={style.picture}>
                <a href="" className={style.view}>VIEW</a>
            </div>
        </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.projDescription}</span>

        </div>
    );
}

export default Project;
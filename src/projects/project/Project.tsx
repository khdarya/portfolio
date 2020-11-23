import React from 'react';
import style from './Project.module.scss';

type ProjectProps = {
    title: string
    projDescription: string
    style: any
}

function Project(props: ProjectProps) {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a href="" className={style.viewBtn}>VIEW</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.projDescription}</span>
            </div>
        </div>
    );
}

export default Project;
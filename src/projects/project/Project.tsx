import React from 'react';
import style from './Project.module.scss';
import { Fade } from "react-awesome-reveal";

type ProjectProps = {
    title: string
    projDescription: string
    style: any
    projectLink: string
}

function Project(props: ProjectProps) {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <Fade>
                    <a href={props.projectLink} className={style.viewBtn}>VIEW</a>
                </Fade>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.projDescription}</span>
            </div>
        </div>
    );
}

export default Project;
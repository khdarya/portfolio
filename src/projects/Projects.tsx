import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Project from "./project/Project";



function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={"Project1 name"} projDescription={"Short description1"}/>
                    <Project title={"Project2 name"} projDescription={"Short description1"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
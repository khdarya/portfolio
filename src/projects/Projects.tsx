import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from './../assets/image/calendar-in-docs-sheets-header.jpg';
import socialImage from './../assets/image/sn1.jpg';



function Projects() {

    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todoList = {
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
               <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={social} title={"Social Network"} projDescription={"Short description1"}/>
                    <Project style={todoList} title={"Todo List"} projDescription={"Short description1"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
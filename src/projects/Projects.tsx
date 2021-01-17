import React from 'react';
import style from './Projects.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from './../assets/image/calendar-in-docs-sheets-header.jpg';
import socialImage from './../assets/image/sn1.jpg';
import trainingCardsImage from './../assets/image/trainingImg.jpg'
import { Fade } from "react-awesome-reveal";

function Projects() {

    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todoList = {
        backgroundImage: `url(${todoImage})`,
    };
    const trainingCards = {
        backgroundImage: `url(${trainingCardsImage})`,
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
               <Fade>
                   <Title text={"Projects"}/>
               </Fade>

                <div className={style.projects}>
                    <Project projectLink={"https://khdarya.github.io/way-of-samurai-react-100"} style={social} title={"Social Network"} projDescription={"Development of Social Network using React, Redux. Application authorization. Profile editing, navigation through user pages, subscribe/unsubscribe users, adding posts;"}/>
                    <Project projectLink={"https://khdarya.github.io/it-incubator-todolist-ts-16"} style={todoList} title={"Todo List"} projDescription={"Development To Do list using React, Redux. Application authorization. Adding, editing, deletion to do lists and tasks; using MaterialUI, formik, storybook;"}/>
                    <Project projectLink={"https://sshaporov.github.io/friday"} style={trainingCards} title={"Training Cards"} projDescription={"Development training cards application using Redux, React (team development). Responsibilities are: registration page, searching, sorting, pagination, editing cards, error processing, modals implementation, css markup. The application is built on Heroku platform;"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
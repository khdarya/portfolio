import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {faSass} from '@fortawesome/free-brands-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faBootstrap} from '@fortawesome/free-brands-svg-icons';
import {faVuejs} from '@fortawesome/free-brands-svg-icons';
import {faNodeJs} from '@fortawesome/free-brands-svg-icons';



function Skills() {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill fa={faJs} title={"Js"} description={"Strong knowledge in JavaScript using Closure, Promise, Inheritance and experience in both Object-Oriented Programming and Functional Reactive Programming. JS books are my desk books: Eloquent-Javascript, developer.mozilla.org, learn.javascript.ru. My resolved katas are in codewars.com/users/DaryaKha"}/>
                    <Skill fa={faSass} title={"Css"} description={"Web development skills with HTML/HTML5, CSS/CSS3, Less/Sass, Bootstrap. Experience in responsive web pages design with Media Queries, CSS Grid Layout and Flexbox"}/>
                    <Skill fa={faReact} title={"React"}
                           description={"Confident understanding of the concept of react-redux architecture. Experience in using Redux to manage the application state and applying middleware such as redux-promise, redux-thunk and redux-saga."}/>
                <Skill fa={faBootstrap} title={"Bootstrap"} description={""} />
                <Skill fa={faReact} title={"Redux"} description={""} />
                <Skill fa={faReact} title={"TS"} description={""} />
                <Skill fa={faVuejs} title={"Vue.js"} description={""} />
                <Skill fa={faNodeJs} title={"Node.js"} description={""} />

                </div>
            </div>
        </div>
    );
}

export default Skills;

import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {faSass} from '@fortawesome/free-brands-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';



function Skills() {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill fa={faJs} title={"Js"} description={"is high-level, often just-in-time compiled, and multi-paradigm"}/>
                    <Skill fa={faSass} title={"Css"} description={"is the language we use to style an HTML document"}/>


                    <Skill fa={faReact} title={"React"}
                           description={"is an open-source, front end, JavaScript library for building user interfaces or UI component"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;

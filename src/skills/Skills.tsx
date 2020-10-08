import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"Js"} description={"is high-level, often just-in-time compiled, and multi-paradigm"}/>
                    <Skill title={"Css"} description={"is the language we use to style an HTML document"}/>
                    <Skill title={"React"}
                           description={"is an open-source, front end, JavaScript library for building user interfaces or UI component"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
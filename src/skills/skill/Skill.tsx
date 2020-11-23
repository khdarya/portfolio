import React from 'react';
import style from './Skill.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type SkillProps = {
    title: string
    description: string
    fa: any
}

function Skill(props: SkillProps) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <FontAwesomeIcon className={style.faIcons} icon={props.fa}/>
            </div>
            <div className={style.skillInfo}>
                <h3 className={style.skillTitle}>{props.title}</h3>
                <span className={style.skillDescription}>{props.description}</span>
            </div>
        </div>
    );
}

export default Skill;
import React from 'react';
import style from './Title.module.scss';


type TitleType = {
    text: string
}

function Title(props: TitleType) {
    return (

        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    );
}

export default Title;
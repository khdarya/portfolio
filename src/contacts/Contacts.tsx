import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import { Fade } from "react-awesome-reveal";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Fade>
                    <Title text={'Contacts'}/>
                </Fade>
                <form className={style.contactForm}>
                    <input className={style.formInput} type="text" placeholder={'Name'} />
                    <input className={style.formInput} type="text" placeholder={'E-mail'} />
                    <textarea className={style.formInput} placeholder={'Your message'}/>
                </form>
                <button className={style.contactBtn} type='submit'>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
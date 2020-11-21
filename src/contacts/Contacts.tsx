import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3>Contacts</h3>
                <form className={style.contactForm}>
                    <input type="text" />
                    <input type="text" />
                    <textarea />
                </form>
                <button type='submit'>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3>Contacts</h3>
                <form className={`${style.contactsContainer} ${style.form}`}>
                    <input type="text" />
                    <input type="text" />
                    <input className={style.textarea} type="textarea" />
                </form>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
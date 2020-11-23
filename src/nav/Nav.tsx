import React from 'react';
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="" className={style.linkText}>Main</a>
            <a href="" className={style.linkText}>Skills</a>
            <a href="" className={style.linkText}>Projects</a>
            <a href="" className={style.linkText}>Contacts</a>
        </div>
    );
}

export default Nav;

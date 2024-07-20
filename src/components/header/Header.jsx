import React from 'react';
import style from './header.module.scss';
import { formatDate } from '../../helpers/formatDate';

const Header = () => {
    return (
        <header className={style.header}>
            <h2 className={style.title}>React News</h2>
            <p className={style.date}>{formatDate(new Date())}</p>
        </header>
    );
};

export default Header;

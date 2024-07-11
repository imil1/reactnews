import React from 'react';
import style from './newsItem.module.scss';

const NewsItem = ({ item }) => {
    return (
        <li className={style.item}>
            <div
                className={style.wrapper}
                style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className={style.info}>
                <h3 className={style.title}>{item.title}</h3>
                <p className={style.extra}>{item.description}</p>
            </div>
        </li>
    );
};

export default NewsItem;

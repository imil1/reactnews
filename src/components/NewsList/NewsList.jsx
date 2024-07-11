import React from 'react';
import style from './NewsList.module.scss';
import NewsItem from '../newsItem/NewsItem';

const NewsList = ({ news }) => {
    return (
        <ul className={style.list}>
            {React.Children.toArray(news.map((item) => <NewsItem item={item}/>))}
        </ul>
    );
};

export default NewsList;

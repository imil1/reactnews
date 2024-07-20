import React from 'react';
import style from './NewsList.module.scss';
import NewsItem from '../newsItem/NewsItem';
import withSkeleton from '../../helpers/hocs/withSkeleton';

const NewsList = ({ news }) => {
    return (
        <ul className={style.list}>
            {React.Children.toArray(news.map((item) => <NewsItem item={item}/>))}
        </ul>
    );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)

export default NewsListWithSkeleton;

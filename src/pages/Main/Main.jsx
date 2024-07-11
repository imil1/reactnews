import React, { useEffect, useState } from 'react';
import style from './main.module.scss';
import { getNews } from '../../api/apiNews';
import NewsBanner from '../../components/newsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/skeleton/Skeleton';

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true);
                const res = await getNews();
                setNews(res.news);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    }, []);
    return (
        <main className={style.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton
                    count={1}
                    type="banner"
                />
            )}
            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton
                    count={10}
                    type="item"
                />
            )}
        </main>
    );
};

export default Main;

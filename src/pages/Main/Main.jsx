import React, { useEffect, useState } from 'react';
import style from './main.module.scss';
import { getNews } from '../../api/apiNews';
import NewsBanner from '../../components/newsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList';

const Main = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await getNews();
                setNews(res.news);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    }, []);
    return (
        <main className={style.main}>
            {news.length > 0 && <NewsBanner item={news[0]} />}
            <NewsList news={news}/>
        </main>
    );
};

export default Main;

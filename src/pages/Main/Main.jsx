import React, { useEffect, useState } from 'react';
import style from './main.module.scss';
import { getNews } from '../../api/apiNews';
import NewsBanner from '../../components/newsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const res = await getNews(currentPage, pageSize);
            setNews(res.news);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
            <Pagination
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                handlePrevPage={handlePrevPage}
                currentPage={currentPage}
            />
            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton
                    count={11}
                    type="item"
                />
            )}
            <Pagination
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePageClick={handlePageClick}
                handlePrevPage={handlePrevPage}
                currentPage={currentPage}
            />
        </main>
    );
};

export default Main;

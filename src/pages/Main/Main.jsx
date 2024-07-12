import React, { useEffect, useState } from 'react';
import style from './main.module.scss';
import { getCategories, getNews } from '../../api/apiNews';
import NewsBanner from '../../components/newsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/categories/Categories';
import Search from '../../components/search/Search';
import { useDebounce } from '../../helpers/hooks/useDebounce';

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const pageSize = 10;

    const [categories, setCategories] = useState([]);
    const [selectedCat, setSelectedCat] = useState('All');

    const [keywords, setKeywords] = useState('');

    const debouncedKeywords = useDebounce(keywords, 1500);

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const res = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectedCat === 'All' ? null : selectedCat,
                keywords,
            });
            setNews(res.news);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchCategories = async () => {
        try {
            const res = await getCategories();
            setCategories(['All', ...res.categories]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage, selectedCat, debouncedKeywords]);

    useEffect(() => {
        fetchCategories();
    }, []);

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
            <Categories
                categories={categories}
                setSelectedCat={setSelectedCat}
                selectedCat={selectedCat}
            />
            <Search
                keywords={keywords}
                setKeywords={setKeywords}
            />
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
                    count={10}
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

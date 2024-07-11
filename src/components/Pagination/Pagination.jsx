import React from 'react';
import style from './pagination.module.scss';

const Pagination = ({
    totalPages,
    handlePrevPage,
    handleNextPage,
    handlePageClick,
    currentPage,
}) => {
    return (
        <div className={style.pagination}>
            <button
                disabled={currentPage <= 1}
                onClick={handlePrevPage}
                className={style.arrow}>
                {'⬅'}
            </button>
            <div className={style.list}>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        onClick={() => handlePageClick(index + 1)}
                        className={style.pageNumber}
                        disabled={index + 1 === currentPage}
                        key={index}>
                        {index + 1}
                    </button>
                ))}
            </div>
            <button
                disabled={(currentPage = 10)}
                onClick={handleNextPage}
                className={style.arrow}>
                {'➡'}
            </button>
        </div>
    );
};

export default Pagination;

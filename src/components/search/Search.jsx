import React from 'react';
import style from './search.module.scss';

const Search = ({ keywords, setKeywords }) => {
    return (
        <div className={style.search}>
            <input
                className={style.input}
                type="text"
                value={keywords}
                placeholder="Search..."
                onChange={(e) => setKeywords(e.target.value)}
            />
        </div>
    );
};

export default Search;

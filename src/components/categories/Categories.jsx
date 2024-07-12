import React from 'react';
import style from './categories.module.scss';

const Categories = ({ categories, setSelectedCat, selectedCat }) => {
    return (
        <div className={style.categories}>
            {React.Children.toArray(
                categories.map((cat) => (
                    <button
                        onClick={() => setSelectedCat(cat)}
                        className={
                            selectedCat === cat ? style.active : style.item
                        }>
                        {cat}
                    </button>
                ))
            )}
        </div>
    );
};

export default Categories;

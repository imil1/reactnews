import React from 'react';
import style from './categories.module.scss';

const Categories = ({ categories, setSelectedCat, selectedCat }) => {
    return (
        <div className={style.categories}>
            <button
                onClick={() => setSelectedCat(null)}
                className={!selectedCat ? style.active : style.item}>
                all
            </button>
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

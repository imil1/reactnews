import React from 'react';
import style from './image.module.scss';

const Image = ({ image }) => {
    return (
        <div className={style.wrapper}>
            {image && (
                <img
                    src={image}
                    alt="news"
                    className={style.image}
                />
            )}
        </div>
    );
};

export default Image;

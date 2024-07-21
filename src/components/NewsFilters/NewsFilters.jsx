import React from 'react'
import style from './NewsFilters.module.scss'
import { useFetch } from '../../helpers/hooks/useFetch';
import { getCategories } from '../../api/apiNews';
import Categories from '../categories/Categories';
import Search from '../search/Search';

const NewsFilters = ({filters,changeFilter}) => {

    const { data: dataCategories } = useFetch(getCategories);
  return (
    <div className={style.filters}>
        {dataCategories && (
                <Categories
                    categories={dataCategories.categories}
                    selectedCat={filters.category}
                    setSelectedCat={(category) =>
                        changeFilter('category', category)
                    }
                />
            )}
            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter('keywords', keywords)}
            />
    </div>
  )
}

export default NewsFilters
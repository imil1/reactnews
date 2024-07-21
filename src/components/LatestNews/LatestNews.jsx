import React from 'react'
import style from './latestnews.module.scss'
import BannersList from '../BannersList/BannersList'

const LatestNews = ({banners,isLoading}) => {
  return (
    <section className={style.section}>
        <BannersList banners={banners} isLoading={isLoading}/>
    </section>
  )
}

export default LatestNews
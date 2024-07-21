import React from 'react'
import style from './bannerslist.module.scss'
import withSkeleton from '../../helpers/hocs/withSkeleton'
import NewsBanner from '../newsBanner/NewsBanner'

const BannersList = ({banners}) => {
  return (
    <ul className={style.banners}>
        {React.Children.toArray(
            banners?.map(banner => <NewsBanner item={banner}/>)
        )}
    </ul>
  )
}

const BannersListWithSkeleton = withSkeleton(BannersList,'banner',10 , 'row')

export default BannersListWithSkeleton
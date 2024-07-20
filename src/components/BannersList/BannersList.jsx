import React from 'react'
import style from './bannerslist.module.scss'

const BannersList = () => {
  return (
    <div>BannersList</div>
  )
}

const BannersListWithSkeleton = withSkeleton(BannersList,'banner',6)

export default BannersListWithSkeleton
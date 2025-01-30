import React from 'react'
import Cart from './shoping'
import Upperheader from '../component/upperheader'
import Header from '../component/header'
import Review from './review'
import ReviewMore from './reviewmore'
import ReviewLast from './reviewlast'
import Like from './like'

const shop = () => {
  return (
    <div>
        <Upperheader/>
        <Header/>
        <Cart/>
        <Review/>
        <ReviewMore/>
        <ReviewLast/>
        <Like/>
    </div>
  )
}

export default shop

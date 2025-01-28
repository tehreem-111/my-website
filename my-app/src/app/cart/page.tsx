import React from 'react'
import Upperheader from '../component/upperheader'
import Header from '../component/header'
import Cart from './cart'

const cart= () => {
  return (
    <div>
    <Upperheader/>
      <Header/>
   <Cart/>
    </div>
  )
}

export default cart
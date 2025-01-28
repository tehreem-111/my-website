import React from 'react'
import Upperheader from './component/upperheader'
import Header from './component/header'
import Herosection from './component/herosection'
import Newarrivals from './component/new'
import TopSelling from './component/topselling'
import Text from './component/text'
import HappyCustomers from './component/review'
import DressStyle from './component/dressstyle'

const Home = () => {
  return (
    <div>
      <Upperheader/>
      <Header/>
      <Herosection/>
      <Text/>
      <Newarrivals/>
      <TopSelling/>
      <HappyCustomers/>
      <DressStyle/>
    </div>
  )
}

export default Home
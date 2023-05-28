import React from 'react'
import Collection from './HomeComponents/Collection'
import MiniCards from './HomeComponents/MiniCards'
import LatestProduct from './HomeComponents/LatestProduct'
import Exclusive from './HomeComponents/Exclusive'
import Logo from './HomeComponents/Logo'
import Week from './HomeComponents/Week'

const Home = () => {
  return (
    <>
      <Collection/>
      <MiniCards/>
      <LatestProduct/>
      <Exclusive/>
      <Logo/>
      <Week/>
    </>
  )
}

export default Home
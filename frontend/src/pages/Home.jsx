import React from 'react'
import Cards from '../components/Cards'
import Sekil from '../components/Sekil'
import Main from '../layout/Main'
import Swiper from '../layout/Swipper'


const Home = () => {
  return (
    <div>
        <Swiper/>
     <Cards/>
   
     <Main/>
     <Sekil/>
    </div>
  )
}

export default Home
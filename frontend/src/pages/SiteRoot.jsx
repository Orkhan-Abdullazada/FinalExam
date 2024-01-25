import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import { Outlet  } from "react-router-dom";
const SiteRoot = () => {
  return (
    <div>
        <Header/>
         <Outlet/>
        <Footer/>
    </div>
  )
}

export default SiteRoot

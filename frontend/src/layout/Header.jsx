import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
  return (
    <div>
      <header>
        <img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="" />
        <div className="header">
            <Link to={"/"} >Home</Link>
            <Link to={"add"} >Add</Link>
            <Link to={"fav"} >Fav</Link>
            <Link to={"/"} >Wine</Link>
            <Link to={"/"} >Contact</Link>
        </div>
      </header>
    </div>
  )
}

export default Header
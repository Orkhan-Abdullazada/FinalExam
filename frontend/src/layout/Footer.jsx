import React from 'react'
import "./Footer.scss"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
  <footer>
  <div className="mid">
        <div className="yan">
<div className="yann">
<span>   <FaInstagram /></span>
   <span>     <FaFacebookF /></span>
      <span>  <FaTwitter /></span>
     <span>   <FaGithub /></span>
</div>
<div className="p">     <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p></div>
        </div>
      </div>
  </footer>
    </div>
  )
}

export default Footer

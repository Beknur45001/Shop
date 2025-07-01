import React from 'react'
import wk from "../../assets/wk.svg"
import instogram from "../../assets/instogram.svg"
import tele from "../../assets/tele.svg"
import what from "../../assets/what.svg"
import apple from "../../assets/apple.svg"
import "./Footer.scss"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='Footer'>
      <img className='logo' src={apple} alt="" />
     <ul>
      <Link to="/wishlist">
      <li>Избранное</li>
      </Link>
      <Link to="cart">
      <li>Корзина</li>
      </Link>
      <li>Контакты</li>
      <li>Условия сервиса</li>
     </ul>
      <div>
        <img src={wk} alt="" />
        <Link to="https://www.instagram.com/cristiano/" target="_blank" rel="noopener noreferrer">
        <img 
        src={instogram} 
        alt=""
        /></Link>
        <Link to="https://t.me/madara101?text=Здраствуйте" 
        target="_blank" rel="noopener noreferrer">
        <img 
        src={tele} 
        alt=""
        /></Link>
        <Link to="https://wa.me/996504545673?text=Здраствуйте" 
        target="_blank" rel="noopener noreferrer">
        <img 
        src={what} 
        alt=""
        /></Link>
      </div>
    </div>
  )
}

export default Footer

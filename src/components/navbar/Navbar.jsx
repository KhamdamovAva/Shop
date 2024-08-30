import React from 'react'
import "./style.scss"
import logo from '../../assets/icons/Logo.svg'
import search from '../../assets/icons/navGlass.svg'
import user from '../../assets/icons/User.svg'
import cart from '../../assets/icons/shoppingCart.svg'


function Navbar() {
  return (
    <>
      <div className="container">
        <nav className='menu'>
          <div className="logo">
            <a href="#"><img src={logo} alt="Logotype" /></a>
          </div>
          <ul className="menu__list">
            <li className="menu__list-item"><a href="#" className="menu__list-link">Women</a></li>
            <li className="menu__list-item"><a href="#" className="menu__list-link">Men</a></li>
            <li className="menu__list-item"><a href="#" className="menu__list-link">About</a></li>
            <li className="menu__list-item"><a href="#" className="menu__list-link">Everworld Stories</a></li>
          </ul>
          <div className="menu__userTools">
            <a href="#"><img src={search} alt="Search" /></a>
            <a href="#"><img src={user} alt="User" /></a>
            <a href="#"><img src={cart} alt="Shopping Cart" /></a>
          </div>
        </nav>
      </div>
      <hr className='bottomLine' />
      <div className="container">
        <nav className='downMenu'>
          <ul className="downMenu__list">
            <li className="downMenu__list-item"><a href="#" className="downMenu__list-link">Holiday Gifting</a></li>
            <li className="downMenu__list-item"><a href="#" className="downMenu__list-link">New Arrivals</a></li>
            <li className="downMenu__list-item"><a href="#" className="downMenu__list-link">Best-Sellers</a></li>
            <li className="downMenu__list-item"><a href="#" className="downMenu__list-link">Clothing</a></li>
            <li className="downMenu__list-item"><a href="#" className="downMenu__list-link">Tops & Sweaters</a></li>
            <li className="downMenu__list-item"><a href="#" className="downMenu__list-link">Pants & Jeans</a></li>
            <li className="downMenu__list-item"><a href="#" className="downMenu__list-link">Outerwear</a></li>
            <li className="downMenu__list-item"><a href="#" className="downMenu__list-link">Shoes & Bags</a></li>
            <li className="downMenu__list-item"><a href="#" className="downMenu__list-link text-red-500">Sale</a></li>
          </ul>
        </nav>
      </div>
    </>

  )
}

export default Navbar

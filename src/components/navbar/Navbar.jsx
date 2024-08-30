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
          <ul className="menu__list">
            <li className="menu__list-item"><a href="#" className="menu__list-link">Women</a></li>
            <li className="menu__list-item"><a href="#" className="menu__list-link">Men</a></li>
            <li className="menu__list-item"><a href="#" className="menu__list-link">About</a></li>
            <li className="menu__list-item"><a href="#" className="menu__list-link">Everworld Stories</a></li>
          </ul>
          <div className="logo">
            <a href="#"><img src={logo} alt="Logotype" /></a>
          </div>
          <div className="menu__userTools">
            <a href="#"><img src={search} alt="Search" /></a>
            <a href="#"><img src={user} alt="User" /></a>
            <a href="#"><img src={cart} alt="Shopping Cart" /></a>
          </div>
        </nav>
      </div>
      <hr className='bottomLine' />
    </>

  )
}

export default Navbar

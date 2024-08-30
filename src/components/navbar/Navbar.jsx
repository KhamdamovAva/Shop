import React from 'react'
import "./style.scss"
import logo from '../../assets/icons/Logo.svg'
import search from '../../assets/icons/navGlass.svg'
import user from '../../assets/icons/User.svg'
import cart from '../../assets/icons/shoppingCart.svg'
import dropdown__img1 from '../../assets/images/dropdown__img1.png'
import dropdown__img2 from '../../assets/images/dropdown__img2.png'


function Navbar() {
  return (
    <>
      <div className="container">
        <nav className='menu'>
          <div className="logo">
            <a href="index.html"><img src={logo} alt="Logotype" /></a>
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
      <hr className='bottomLine__Top' />
      <hr className='bottomLine__Down' />
      <nav className='downMenu'>
        <div className="container">
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
          <div className='dropdown'>
            <ul className="dropdown__list">
              <li className='text-gray-400'><h5>HIGHLIGHTS</h5></li>
              <li className="dropdown__list-item"><a href="#" className="dropdown__list-link">Shop All New Arrivals</a></li>
              <li className="dropdown__list-item"><a href="#" className="dropdown__list-link">The Gift Guide</a></li>
              <li className="dropdown__list-item"><a href="#" className="dropdown__list-link">New Bottoms</a></li>
              <li className="dropdown__list-item"><a href="#" className="dropdown__list-link">New Tops</a></li>
              <li className="dropdown__list-item"><a href="#" className="dropdown__list-link">T-Shirt Bundles</a></li>
              <li className="dropdown__list-item"><a href="#" className="dropdown__list-link">Under $100</a></li>
            </ul>
            <ul className="dropdown__list">
              <li className='text-gray-500'><h5>FEATURED SHOPS</h5></li>
              <li className="dropdown__list-item"><a href="#" className="dropdown__list-link">The Holiday Outfit Edit</a></li>
              <li className="dropdown__list-item"><a href="#" className="dropdown__list-link">Giftable Sweaters</a></li>
              <li className="dropdown__list-item"><a href="#" className="dropdown__list-link">Uniform & Capsule</a></li>
              <li className="dropdown__list-item"><a href="#" className="dropdown__list-link">The Performance Chino Shop</a></li>
              <li className="dropdown__list-item"><a href="#" className="dropdown__list-link">Top Rated Men's Clothing</a></li>
            </ul>
            <div className="dropdown__img">
              <a href="#"><img src={dropdown__img1} alt="The holiday Outfit edit" /></a>
            </div>
            <div className="dropdown__img">
              <a href="#"><img src={dropdown__img2} alt="Giftable Sweaterst" /></a>
            </div>
          </div>
        </div>

      </nav>

    </>

  )
}

export default Navbar

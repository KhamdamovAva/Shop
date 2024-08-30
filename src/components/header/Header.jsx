
import React from 'react'
import "./style.scss"
import Navbar from '../navbar/Navbar'
import HeaderMain from '../headerMain/HeaderMain'
function Header() {
  return (
    <header className='header'>
      <Navbar />
      <HeaderMain />
    </header>

  )
}

export default Header

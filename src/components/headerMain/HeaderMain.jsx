import React from 'react'
import './style.scss'
import WhiteBtn from '../whiteButton/WhiteBtn'
function HeaderMain() {
  return (
    <>
      <div className="header__main">
        <div className="container">
          <div className="header__content">
            <h1 className='header__content-title'>Your Cozy Era</h1>
            <p className='header__content-text'>Get peak comfy-chic<br></br>
              with new winter essentials.</p>
            <WhiteBtn text={"SHOP NOW"}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderMain

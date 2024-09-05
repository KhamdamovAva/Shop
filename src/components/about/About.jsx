import React from 'react'
import WhiteBtn from '../whiteButton/WhiteBtn'
import './style.scss'

function About() {
  return (
    <section className='about'>
      <div className="container">
        <div className="about__wrapper">
          <h3 className='about__wrapper-title'>We're on a Mission To Clean Up the Industry</h3>
          <p className='about__wrapper-text'>Read about our progress in our latest Impact Report.</p>
          <WhiteBtn text="LEARN MORE"/>
        </div>
      </div>
    </section>
  )
}

export default About

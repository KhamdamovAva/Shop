import React from 'react'
import './style.scss'
import { category } from '../../Dates/categoryData'

function Category() {
  return (
    <>
      <section className='category'>
        <div className="container">
          <div className="category__main">
            <h3 className='category__main-title mb-10 text-[22px]'>Shop by Category</h3>
            <div className="category__main-cards">
              {category.map((item) => (
                <div className='category__main-card' key={item.id}>
                  <img className='w-[225px] mb-5' src={item.img} alt="Images" />
                  <a className='category__main-link' href="#">{item.title}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Category

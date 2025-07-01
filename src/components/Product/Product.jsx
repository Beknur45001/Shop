import React from 'react'
import "./Product.scss"
import { Link } from 'react-router-dom'

function Product({pro}) {
  return (
    <div className='product'>
        <Link to={`/detail/${pro.id}`}>
      <img src={pro.image} alt="" />
     </Link> <div className='text'>
        <h4>{pro.title}</h4>
        <div className='price'>
        <p>{pro.price}$</p>
        <p className='dis'>{pro.discount}$</p>
        </div>
      </div>
    </div>
  )
}

export default Product

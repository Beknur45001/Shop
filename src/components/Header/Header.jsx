import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { apiClient } from '../../axios/apiClient'

function Header() {

async function getCategory() {
  try {
    const res = await apiClient.get("https://6824116e65ba05803398c680.mockapi.io/products/category-list")

    console.log(res);
    
  } catch (error) {
    console.log(error);
    
  }
}
useEffect(() => {
  getCategory()
} ,[])
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Header

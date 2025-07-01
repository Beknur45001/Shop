import React from 'react'
// import not from '../assets/not.svg'
// import "./stile.scss"
// import { Link } from 'react-router-dom'

function Notfount() {
  return (
    <div>
        <div className="notfound">
      <img src={not} alt="" />
      <p>Your visited page not found. You may go home page.</p>
      </div>
      <button className='btr'><Link to="/">Back to home page</Link></button>

    </div>
  )
}

export default Notfount

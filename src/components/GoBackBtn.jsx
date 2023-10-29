import React from 'react'
import { Link } from 'react-router-dom'
export const GoBackBtn = () => {
  return (
    <Link to="/"><button className='go-back-btn'><i class="fa-solid fa-arrow-left arrow-left" style={{color: "#ffffff"}}></i></button>
    </Link>
  )
}

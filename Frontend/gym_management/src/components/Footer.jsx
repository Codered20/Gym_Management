import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <div>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div>
        <Link to="/trainers">Our Trainers</Link>
      </div>
      <div>
        <Link to="/services">Our Services</Link>
      </div>
    </div>
  )
}

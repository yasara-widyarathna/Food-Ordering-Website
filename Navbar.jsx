import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='foodie'>Foodie.</h1>
        <h3 className='admin'>Admin Panel</h3>

        <img className='profile' src={assets.profile_icon} alt="" />

    </div>
  )
}

export default Navbar
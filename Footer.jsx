import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1 className='foodie'>Foodie.</h1>
                <p>Delicious meals delivered right to your doorstep! At Foodie. we connect you with the best local restaurants and offer a seamless, reliable, and fast food delivery experience. Whether you're craving comfort food, healthy eats, or something exotic, we've got you covered. Your satisfaction is our priority—order now and let us bring the joy of good food to your table!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94712552554</li>
                    <li>foodie@gmail.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 &copy; Yasarawidyarathna.com - All Right Reserved. </p>

    </div>
  )
}

export default Footer
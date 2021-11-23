import React from 'react'
import logo from'../assests/ecommerce-product-page-main/ecommerce-product-page-main/images/logo.svg'
import cartIcon from'../assests/ecommerce-product-page-main/ecommerce-product-page-main/images/icon-cart.svg'
import avatar from'../assests/ecommerce-product-page-main/ecommerce-product-page-main/images/image-avatar.png'

import './css/nav.css'

const navbar = () => {
    return (
        <nav>
            <div id="logo">
                <img src={logo} alt="" />
            </div>

            <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Woman</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="profile--cart">
                <button id="cart">
                    <img src={cartIcon} alt="" />
                </button>
                <div id="profile">
                    <figure>
                        <img src={avatar} alt="" />
                    </figure>
                </div>
            </div> 
        </nav>
    )
}

export default navbar


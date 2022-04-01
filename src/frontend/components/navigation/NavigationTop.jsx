import { ecom_logo } from '../../assets'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavgationTop(){
    return  <nav className="navbar flex-sb">
    <div>
        <Link to="/"><img src={ecom_logo} alt="Shutter Island logo" className="responsive-image mg-xs pointer border-radius-sm"/></Link>
    </div>
    <div>
        <div className="search flex-center">
            <input type="text" name="search" placeholder="What's on your mind?" className="border-radius-sm"></input>
            <button className="btn light-btn mg-l-s">Search</button>
        </div>
    </div>
    <div className="flex-center">
        <Link to="/signup"><button className="btn secondary-btn">Sign Up</button></Link>
        <Link to="/login"><button className="btn primary-btn mg-s">Login</button></Link>
        <div className="notification-badge-container mg-m">
            <a href="./pages/wishlist/wishlist.html"><i className="far fa-heart pointer"></i></a>
            <div className="notification-badge flex-center xs-text">
                <span>8</span>
            </div>
        </div>
       
        <div className="notification-badge-container mg-m">
            <a href="./pages/cart/cart.html"><i className="fas fa-shopping-cart pointer"></i></a>
            <div className="notification-badge flex-center xs-text">
                <span>7</span>
            </div>
        </div>
    </div>
</nav>
}
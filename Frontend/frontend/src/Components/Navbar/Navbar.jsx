import React from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import './Navbar.css';
const Navbar =()=>{
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=""></img>
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li>Shop<hr/></li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt=""></img>
            </div>
        </div>
    )
};
export default Navbar;
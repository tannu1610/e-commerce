import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown_icon.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo"></img>
                <p>SHOPPER</p>
            </div>

            <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() => {setMenu("shop")}} > <Link to='/e-commerce' style={{textDecoration: 'none'}}>Shop</Link> {menu === "shop"?<hr/>:<></>} </li>
                <li onClick={() => {setMenu("mens")}} ><Link to='/e-commerce/mens' style={{textDecoration: 'none'}}>Men</Link>  {menu === "mens"?<hr/>:<></>} </li>
                <li onClick={() => {setMenu("womens")}} ><Link to='/e-commerce/womens' style={{textDecoration: 'none'}}>Women</Link>  {menu === "womens"?<hr/>:<></>} </li>
                <li onClick={() => {setMenu("kids")}} ><Link to='/e-commerce/kids' style={{textDecoration: 'none'}}>Kids</Link>  {menu === "kids"?<hr/>:<></>} </li>
            </ul>
            <div className="nav-login-cart">
               <Link to='/e-commerce/login'><button>Login</button></Link> 
                <Link to='/e-commerce/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}


export default Navbar;
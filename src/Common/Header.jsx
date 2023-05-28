import React, { useState } from 'react'
import { NavLink } from 'react-bootstrap'

const Header = () => {

    const [sidebar, setSidebar] = useState(false)
    const tooglesidebar = ()=>{
        setSidebar((prevState)=> !prevState)
    }

  return (
    <>
    
        <header>
            <nav>
                <div className="logo">
                    <img src="https://preview.colorlib.com/theme/karma/img/logo.png" alt="" />
                </div>
                <ul className={sidebar ? "main-ul open-ul" : "main-ul"}>
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Shop</NavLink>
                    <ul>
                        <li><NavLink>SHOP CATEGORY</NavLink></li>
                        <li><NavLink>PRODUCTS DETAILS</NavLink></li>
                        <li><NavLink>PRODUCTS CHECKOUT</NavLink></li>
                        <li><NavLink>AHOPPING CART</NavLink></li>
                        <li><NavLink>CONFIRMATION</NavLink></li>
                    </ul>
                    </li>
                    <li><NavLink>Shop</NavLink>
                    <ul>
                        <li><NavLink>BLOG</NavLink></li>
                        <li><NavLink>BLOG DETAILS</NavLink></li>
                    </ul>
                    </li>
                    <li><NavLink>Pages</NavLink>
                    <ul>
                        <li><NavLink>LOGIN</NavLink></li>
                        <li><NavLink>TRACKING</NavLink></li>
                        <li><NavLink>DETAILS</NavLink></li>
                    </ul>
                    </li>
                    <li><NavLink>Contact</NavLink></li>
                    <li><i className="fa-solid fa-magnifying-glass"></i></li>
                    <li><i className="fa-solid fa-bag-shopping"></i></li>
                </ul>
                <button onClick={tooglesidebar} ><i className="fa-solid fa-bars"></i></button>
            </nav>
        </header>
    </>
  )
}

export default Header
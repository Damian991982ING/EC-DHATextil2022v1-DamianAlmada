import React,{useState} from "react";
import Menu from "../svg/bars-solid.svg";
import Close from "../svg/times-solid.svg";
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom";


import "./NavBar.css";


const NavBar=()=>{

    const [menu, setMenu] = useState(false)
    

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return(
        
        <header className="navbar navbar-expand-lg navbar-light bg-light">

            <Link className="Logo" to={'/'}>
               <h1>DHATextil</h1>
            </Link>
            
            
            <ul style={styleMenu}>
                <li>
                    <Link to={'/Home'}>
                        Home
                    </Link>
                    
                </li>

                <li>
                    <NavLink to={'/category/Polyamide'} className={nav=>nav.isActive ? 'nav-active' : ''}>Polyiamide</NavLink>
                </li>
                <li>
                    <NavLink to={'/category/Polyester'} className={nav=>nav.isActive ? 'nav-active' : ''}>Polyester</NavLink>
                </li>
                <li>
                    <NavLink to={'/category/Acrylic'} className={nav=>nav.isActive ? 'nav-active' : ''}>Acrylic</NavLink>
                </li>
                
               
                <li>
                    <Link to={'/About'}>
                        About
                    </Link>
                    
                </li>
                <li>
                    <Link to={'/Contact'}>
                       Contact
                    </Link>
                    
                </li>
                <li>
                    <Link to={'/'}>
                       Login / Register

                    </Link>
                    
                </li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30" className="menu"/>
                </li>
            </ul>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="/" width="30"/>
            </div>
            <Link className="cart-icon" to="/Cart">
               <CartWidget/>
            </Link>
           

        </header>

        
        

       

    );
};

export default NavBar;
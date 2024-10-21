import React , { useContext, useState } from 'react';
import './navbar.css'
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/shopcontext';

const Navbar = () => {

const [menu,setMenu] = useState("shop");
//variable menu avec shop initialization


const {getTotalCartItems}=useContext(ShopContext);


return(
  <div className='navbar'>

    <div className='nav-logo'>
        <img src={logo} alt='Logo' />
        <p>SHOPPER</p>
    </div>

    <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration : 'none'}} to='/'> Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        {/* crée un lien vers la page d'accueil  */}
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration : 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration : 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration : 'none'}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
    </ul>

    <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>  
       <Link  to='/cart'><img src={cart_icon} alt='Cart Icon' /></Link>
       <div className="nav-cart-count">{getTotalCartItems()}</div>
    </div>
    
  </div>
  )

  };  

export default Navbar;



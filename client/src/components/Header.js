import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom'
import '../styles/header.css'
import Logo from '../images/shaunlogo.png' 

class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='headerContainer'>
        <div className='logoContainer'>
          <Link to='/'>
            <img className='logo' src={Logo} alt=''/>
          </Link>
        </div>
        <div className='navContainer'>
          <div className='nav'>About</div>
          <NavLink to='/booktour'><div className='nav'>Book Tour</div></NavLink>
          <div className='nav'>Blog</div>
          <div className='nav'>Recipes</div>
          <div className='nav'>Store</div>
        </div>
        <div className='socialContainer'>
          <a href="https://twitter.com/djshaunoneale?lang=en">
            <div className='socialIcon'><i className="fa fa-twitter-square" aria-hidden="true"></i></div>
          </a>
          <a href="https://www.facebook.com/shaunoneale">
            <div className='socialIcon'><i className="fa fa-facebook-square" aria-hidden="true"></i></div>
          </a>
          <a href="https://www.instagram.com/djshaunoneale/?hl=en">
            <div className='socialIcon'><i className="fa fa-instagram" aria-hidden="true"></i></div>
          </a>
        </div>
      </div>
     );
  }
}
 
export default Header
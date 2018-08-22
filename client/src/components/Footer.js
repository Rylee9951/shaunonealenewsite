import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/header.css'
import Logo from '../images/shaunlogo.png' 

class Footer extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='footerContainer'>
        <div className='footerIconContainer'>
          <a href="https://twitter.com/djshaunoneale?lang=en">
            <div className='footerSocialIcon'><i className="fa fa-twitter-square" aria-hidden="true"></i></div>
          </a>
          <a href="https://www.facebook.com/shaunoneale">
            <div className='footerSocialIcon'><i className="fa fa-facebook-square" aria-hidden="true"></i></div>
          </a>
          <a href="https://www.instagram.com/djshaunoneale/?hl=en">
            <div className='footerSocialIcon'><i className="fa fa-instagram" aria-hidden="true"></i></div>
          </a>
        </div>
        <div className='contactContainer'>
          <h2 className="contactHeader">Contacts</h2>
          <p className="contactTitle">General Bookings - <a className="link" href="mailto:booking@djshaunoneale.com">booking@djshaunoneale.com</a></p>
          <p className="contactTitle">TV & Film Bookings - <a className="link" href="mailto:asst@mortarLA.com">asst@mortarLA.com</a></p>
          <p className="contactTitle">DJ Booking - <a className="link" href="mailto:dee@blueprintsoundlv.com">dee@blueprintsoundlv.com</a></p>
        </div>
        <div className='footerLogoContainer'>
          <Link to='/'>
            <img className='footerLogo' src={Logo} alt=''/>
          </Link>
        </div>
      </div>
     );
  }
}
 
export default Footer;
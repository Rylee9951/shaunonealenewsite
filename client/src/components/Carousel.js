import React, { Component } from 'react'
import CarouselImage from 'react-image-carousel'
import "font-awesome-sass-loader"
import "../../node_modules/react-image-carousel/lib/css/main.min.css"
import '../styles/home.css'
import MainPic from '../images/image9.png'
import Logo from '../images/shaunlogo.png' 


let images = [
  MainPic,
  Logo
]
class Carousel extends Component {
  
  render() { 
    return ( 
      <div className="my-carousel">
      <CarouselImage images={images} 
        thumb={true}
        loop={true}
        autoplay={5000}/>
      </div>
     );
  }
}
 
export default Carousel;
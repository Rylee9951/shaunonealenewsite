import React, { Component } from 'react'
import Carousel from './Carousel'
import '../styles/home.css'
class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Carousel />
        <div className='aboutContainer'>
          <div className='aboutTitle'>
            <h1>About Shaun O'Neale</h1>
          </div>
          <div className='aboutParaContainer'>
            <p>Winner of MasterChef season 7, Shaun O'Neale has been orchestrating dance floors from the DJ booth for almost 20 years and refining his culinary skills in home kitchens for just as long. In the late 90s O'Neale found his love for electronic music and quickly climbed the DJ ranks in the underground rave scene, performing regularly with some of the pioneers of the dance music industry. In Tampa Florida in 2003 Shaun would begin to move out of the underground scene and into the mainstream taking residency at some of South Florida's most legendary nightclubs and performing at some of the biggest music festivals of the time. Lured by the bright lights of Sin City Shaun O'Neale relocated to Las Vegas in 2008 and quickly became a staple in the Vegas pool and nightclub scene holding residencies at major venues like Liquid Pool, Bare Pool, Haze Nightclub, Light Nightclub and Daylight Pool just to name a few O'Neale was also in high demand for major corporate events such as Michael Jordan's Celebrity Golf Tournament, Justin Timberlake's Shriners Open and annual events for Playboy Magazine. In 2010 O'Neale became the first DJ to ever perform on Las Vegas Blvd. for a New Years Eve celebration in front of over 100,000 people with the beautiful Caesars Palace as his backdrop.</p>
            <p>One thing has remained constant for Shaun O'Neale through the crazy years in the DJ booth and that is his absolute obsession with all things food. Spending years developing and fine tuning his culinary skills O'Neale came out of the home kitchen and in to the spotlight in 2016 on season 7 of the hit FOX show MasterChef. With his elevated plating and big bold flavors O'Neale quickly became a front runner and soon began to dominate the competition, with 8 individual wins starting with the coveted white apron and ending with the MasterChef trophy. Shaun was victorious in 3 Mystery Box Challenges as well as 3 elimination challenges setting a record for individual wins in the MasterChef kitchen with his incredible flavors and unique eye for creating stunning plates. Having the honor to cook for and learn from true masters in the culinary world like Gordon Ramsay, Christina Tosi, Wolfgang Puck, Daniel Boulud, Richard Blais, Aaron Sanchez, Edward Lee and Kevin Sbraga has only intensified Shaun's passion in the kitchen as he now moves on to the next phase as a Chef, DJ and Author of "My Modern American Table".</p>
          </div>
        </div>
      </div>
     )
  }
}
 
export default Home;
import React, { Component } from 'react';
import Book from '../images/bookCover.png'
import '../styles/events.css'

class Events extends Component {
  state = {  }
  render() { 
    return ( 
      <div id='eventContainer'>
        <div><img className='eventBook' src={Book}  alt=''/></div>
        <div className='eventsColumn'>
          <div className='eventHeader'>
            <h1 className='headline'>My Modern American Table</h1>
            <h2 className='bookTour'>Book Tour 2018</h2>
          </div>
          <div className='events'>
            <div className='event'>
              <p className='eventDate'>July 23</p>
              <p className='eventTitle'>Bite of Seattle</p>
              <p className='eventLocation'>Seattle, Washington</p>
            </div>
            <div className='event'>
              <p className='eventDate'>July 23</p>
              <p className='eventTitle'>Bite of Seattle</p>
              <p className='eventLocation'>Seattle, Washington</p>
            </div>
            <div className='event'>
              <p className='eventDate'>July 23</p>
              <p className='eventTitle'>Bite of Seattle</p>
              <p className='eventLocation'>Seattle, Washington</p>
            </div>
            <div className='event'>
              <p className='eventDate'>July 23</p>
              <p className='eventTitle'>Bite of Seattle</p>
              <p className='eventLocation'>Seattle, Washington</p>
            </div>
            <div className='event'>
              <p className='eventDate'>July 23</p>
              <p className='eventTitle'>Bite of Seattle</p>
              <p className='eventLocation'>Seattle, Washington</p>
            </div>
            <div className='event'>
              <p className='eventDate'>July 23</p>
              <p className='eventTitle'>Bite of Seattle</p>
              <p className='eventLocation'>Seattle, Washington</p>
            </div>
          </div>
          <h3>www.djshaunoneale.com</h3>

        </div>
      </div>
     );
  }
}
 
export default Events;
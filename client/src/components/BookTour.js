import React, { Component } from 'react';
import Map from './Map'
import Events from './Events'
class BookTour extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Map />
        <Events />
      </div>
     );
  }
}
 
export default BookTour;

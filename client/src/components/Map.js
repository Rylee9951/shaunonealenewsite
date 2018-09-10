import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { getEvents } from '../actions/eventActions'
import {connect} from 'react-redux'
import Book from '../images/bookCover.png'
import '../styles/map.css'

const Events = ({image}) => <img className="book" src={image} alt=''/>

class Map extends Component {
  componentDidMount() {
    getEvents()
  }
  static defaultProps = {
    center: {
      lat: 30.4881141,
      lng: -48.7215369
    },
    zoom: 3
  };
  render() { 
    return ( 
      <div className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAbxwEct9VAebntDE3iegazNsTXNu3e-dM'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
         {this.props.events.map(event => (
          <Events key={event.id} lat={event.lat} lng={event.lng} image={Book}/>
         ))} 
          
        </GoogleMapReact>
      </div>
     );
  }
}
function mapStateToProps(appState) {
	return {
		events: appState.eventReducer.events
	}
}

export default connect(mapStateToProps)(Map)
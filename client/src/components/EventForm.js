import React, { Component } from 'react';
import '../styles/form.css'

class EventForm extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <form className='addEventForm'>
          <h1 className=''>Add New Event Form</h1>
          <div className='field'>
            <input id="date" type="text" name="date" value={this.state.date} onChange={this.handleChange} placeholder="Add Date for Event"/>
            <label htmlFor="date">Add Date for Event</label>
          </div>
          <div className='field'>
            <input id="title" type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Add Title"/>
            <label htmlFor="title">Add Title</label>
          </div>
          <div className='field'>
            <input id="location" type="text" name="location" value={this.state.title} onChange={this.handleChange} placeholder="City, State"/>
            <label htmlFor="location">City, State</label>
          </div>
          <div className='field'>
            <input id="lat" type="text" name="lat" value={this.state.lat} onChange={this.handleChange} placeholder="Add Latitude"/>
            <label htmlFor="lat">Add Latitude</label>
          </div>
          <div className='field'>
            <input id="lng" type="text" name="lng" value={this.state.lng} onChange={this.handleChange} placeholder="Add Longitude"/>
            <label htmlFor="lng">Add Logitude</label>
          </div>
          <button type='submit' >Submit</button>
        </form>
      </div>
     );
  }
}
 
export default EventForm;
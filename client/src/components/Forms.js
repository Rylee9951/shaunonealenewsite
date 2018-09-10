import React, { Component } from 'react';
import EventForm from './EventForm'
import { logout } from '../actions/auth';

class Forms extends Component {
  handleLogout = e => {
    e.preventDefault()
    logout()
    this.props.history.push('/login')
  }
  render() { 
    return ( 
      <div>
        <form className='logout' onSubmit={this.handleLogout}>
          <button type='submit'>Logout</button>
        </form>
        <EventForm />
      </div>
     );
  }
}
 
export default Forms;
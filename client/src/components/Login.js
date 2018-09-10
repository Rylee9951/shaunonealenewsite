import React, { Component } from 'react';
import {login} from '../actions/auth'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import '../styles/form.css'

class Login extends Component {
  state = { 
    username: '',
    password: ''
   }
   
   handleChange = e => {
     this.setState({
       [e.target.name]: e.target.value
     })
   }

   handleSubmit = e => {
    e.preventDefault()
    login(this.state.username, this.state.password)
   }

  render() {
    if(this.props.isAuthenticated){
      return <Redirect to ="/forms" />
    }else{
    return ( 
      <div>
        <form className='login' onSubmit={this.handleSubmit}>
          <h2 className='loginTitle' >Login</h2>
          <div className='field'>
            <input id="username" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
            <label htmlFor="username">Username</label>
          </div>
          <div className='field'>
            <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Username"/>
            <label htmlFor="password">Password</label>
          </div>
          <button className='loginButton' type="submit">Login</button>
        </form>
      </div>
     )
    }
  }
}
function mapStateToProps(appState){
  return{
    isAuthenticated: appState.authReducer.isAuthenticated
  }
} 
export default connect(mapStateToProps)(Login)
import React, { Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthRoute from './AuthRoute'
import '../styles/app.css'
import store from '../store'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import BookTour from './BookTour'
import Login from './Login'
import Forms from './Forms'

class App extends Component {
  render () {
    return (
      <Provider store = {store}>
        <Router>
          <div className='siteContainer'>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/booktour' component={BookTour} />
              <Route path='/login' component={Login} />
              <AuthRoute path='/forms' component={Forms} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

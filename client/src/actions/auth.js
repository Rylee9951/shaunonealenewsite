import axios from 'axios'
import jwt from 'jsonwebtoken'
import store from '../store'

let loginInterceptor = null

if(window.localStorage.getItem('token')) {
  const token = window.localStorage.getItem('token')
  loginInterceptor = axios.interceptors.request.use(config =>{
    config.headers['Authorization'] = 'Bearer ' + token
  })

  const username = jwt.decode(token).username

  store.dispatch({
    type: 'LOGIN_SUCCESS',
    payload: {
      username
    }
  })  
}

export function login(username, password) {
  axios.post('/auth/login', {username, password}).then(resp => {
    const token = resp.data.token
    
    window.localStorage.setItem('token', token)

    loginInterceptor = axios.interceptors.request.use(config =>{
      config.headers['Authorization'] = 'Bearer ' + token
    })
    store.dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        username
      }
    })  
  }).catch(err => {
    store.dispatch({
      type: 'LOGIN_FAILURE'
    })
  })
}

export function logout() {
  axios.interceptors.request.eject(loginInterceptor)
  const token = window.localStorage.getItem('token')
  window.localStorage.removeItem('token', token)
  store.dispatch({
    type: 'LOGOUT'
  })
}
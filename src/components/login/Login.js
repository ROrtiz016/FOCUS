import React, { Component } from 'react'
import axios from 'axios'
import '../../App.css'
import './Login.css'
import { Link } from 'react-router-dom'
import Particles from './Particle';


class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      user: []
    }
    this.userHandler = this.userHandler.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.passwordHandler = this.passwordHandler.bind(this)
  }

  userHandler(e) {
    this.setState({
      username: e.target.value
    })
  }

  passwordHandler(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleLogin() {
    const { username, password } = this.state
    if (!username || !password) {
      return alert('Please enter username and password')
    }
    let body = {
      username,
      password
    }

    axios.post('/api/login', body).then(res => {
      this.setState({
        user: res.data
      })
      this.props.history.push('/movies')
      console.log(res.data)
    }).catch(() => { console.log('Invalid') })

  }

  

  render() {

    return (
      <div className='App' >
      <Particles/>
        <div className='loginBox'>
          <h1 className='login'>FOCUS</h1>
          <div className='inputBox'>
            <input type='text' className='input' placeholder='username' onChange={this.userHandler} />
            <input type='password' className='input' placeholder='password' onChange={this.passwordHandler} />
            <button className='input1' onClick={this.handleLogin}>Access</button>
            <Link to='/register'><button className='input1'>Register</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
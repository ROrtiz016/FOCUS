import React, { Component } from 'react'
import axios from 'axios'
import './Register.css'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      confPass: '',
    }
    this.usernameHandler = this.usernameHandler.bind(this)
    this.passwordHander = this.passwordHander.bind(this)
    this.confirmHandler = this.confirmHandler.bind(this)
    this.registerUser = this.registerUser.bind(this)
  }


  usernameHandler(e){
    this.setState({
      username: e.target.value
    })
    console.log(this.state.username)
  }

  passwordHander(e){
    this.setState({
      password: e.target.value
    })
    console.log(this.state.password)
  }

  confirmHandler(e){
    this.setState({
      confPass: e.target.value
    })
    console.log(this.state.confPass)
  }

  registerUser(){
    const{username, password, confPass} = this.state;

    if(username && password === confPass){
      console.log(this.state.username)
      console.log(this.state.password)
      axios.post('/api/reg', {username, password}).then( res => console.log(res.data) )
      window.location='http://localhost:3000/#/';
      alert('registerComplete')
    }else{
      return alert('please confirm username and password')
    }
  }

  render() {
    return (
      <div className='Register'>
        <h1 className='titleReg'>Register</h1>
        <div className='regInput'>
          <input className='input'  type="text" placeholder='username' onChange={this.usernameHandler} />
          <input className='input'  type="password" placeholder='password' onChange={this.passwordHander} />
          <input className='input'  type="password" placeholder='confirm-pw' onChange={this.confirmHandler}/>
        </div>
          <button className='input2' onClick={this.registerUser} >Register</button>
      </div>
    )
  }
}
export default Register
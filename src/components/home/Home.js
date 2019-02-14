import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component{


  render(){
    return (
      <div className='home'>
        <h1 className='message'>You Are Logged In Your Session!</h1>
        <link rel="stylesheet" href="/css/home.css"/>
        <button className='profileBtn'><Link to='/movies'>Access Movies</Link></button>
      </div>
    )
  }
}

export default Home
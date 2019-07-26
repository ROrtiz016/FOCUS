import React, {Component} from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import Lens from './camera-lens.png'

class NavBar extends Component{
  constructor(){
    super()
    this.state = {
      value: ''
    }
  }

  render(){
    return(
      <div className='NavBar'>
        <div className='logo-container'>
         <img src={Lens} alt="" className='logo'/>
         <h1>FOCUS</h1>
        </div>

        <div>
          <Link to='/'>Movies</Link>
        </div>

        <div>
          <Link to='/Series'>Series</Link>
        </div>

        <div>
          
        </div>

        <div>
          <Link to='/Login'>Login</Link>
        </div>

        <div>
          <h2>Search <input type="text" /></h2>
        </div>
      </div>
    )
  }
}

export default NavBar;
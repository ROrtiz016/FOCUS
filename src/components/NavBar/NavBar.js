import React, {Component} from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

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
        <div>
          <Link to='/movies'>Movies</Link>
        </div>

        <div>
          <Link to='/Genres' >Genres</Link>
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
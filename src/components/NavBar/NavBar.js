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
          <Link to='/users'><p>Users</p></Link>
        </div>
        <div>
          <h2>now playing</h2>
        </div>

        <div>
          <h2>genre</h2>
        </div>

        <div>
          <h2>search</h2>
          <input type="text"/>
        </div>
      </div>
    )
  }
}

export default NavBar;
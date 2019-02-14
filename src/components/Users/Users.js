import React, {Component} from 'react'
import axios from 'axios'

class Users extends Component{
  constructor(){
    super()
    this.state={
      users: '',
      user: []
    }

    this.inputHandler = this.inputHandler.bind(this)
  }

  componentDidMount(){
    axios.get(`/api/users`).then(
      res => console.log(res.data)
    )
  }

  inputHandler(e){
    this.setState({
      users: e.target.value
    })
    console.log(this.state.users)
  }

  sendInfo= () => {
    axios.get(`/users?username=${this.state.users}`).then(res => this.setState({
        user: res.data
      })
      )
  }


  render(){
    let user = this.state.user.map((el) => {
      return (
        <div key={el.id}>
          <h2>{el.username}</h2>
        </div>
      )
    })

    return(
      <div>
        Look for other Movie Fans 
        <input type="text" onChange={this.inputHandler}/>
        <button onClick={this.sendInfo}>ENTER</button>

        <div>
          <h1>result: {user}</h1>
        
          {console.log(this.state.userFound)}
        </div>
        {/* favorite Movie
        <input type="text"/> */}
      </div>
    )
  }
}

export default Users;
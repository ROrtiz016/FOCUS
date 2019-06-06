import React, {Component} from 'react'
import axios from 'axios'
import './Genres.css'

class Genres extends Component{
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      page: 1
    }
  }

  componentDidMount(){
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=ad985d74904d27ff507c1eeca723dc4e&language=en-US').then(res => this.setState({
      movies: res.data
    }))
  }

  render(){
    console.log(this.state.movies.genres)
    // let list = this.state.movies.genres.map((el) => {
    //   return (
    //     <div>
    //       <button>{el.name}</button>
    //     </div>
    //   )
    // })
    return (
      <div>
        <h1>List</h1>
        
        {/* {list} */}
      </div>
    )
  }
}

export default Genres;
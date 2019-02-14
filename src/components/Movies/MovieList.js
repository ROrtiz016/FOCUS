import React, {Component} from 'react'
import axios from 'axios'

export default class MovieList extends Component{
  constructor() {
    super()
    this.state = {
      movies: [],
      page: 1
    }
  }

  componentDidMount(){
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ad985d74904d27ff507c1eeca723dc4e&language=en-US&page=' + this.state.page).then(res => this.setState({
      movies: res.data.results
    }))
  }


  render(){ 
    return(
      <div>
        {console.log(this.state.movies)}
      </div>
    )
  }
}
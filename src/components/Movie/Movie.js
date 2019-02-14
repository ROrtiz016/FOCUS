import React, { Component } from 'react'
import './Movie.css'
import axios from 'axios'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {},
      video: {}
    }
  }

  componentDidMount() {
    let key = 'ad985d74904d27ff507c1eeca723dc4e'
    console.log(this.props.match.params)
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${key}`).then(res => {
      this.setState({
        movie: res.data
      })
      console.log(res.data)
    })
    axios.get('videos').then( res =>{
      this.setState({
        video: res.data
      })
      console.log(res.data)
    })

  }

  render() {
    let movie = this.state.movie
    let poster = `https://image.tmdb.org/t/p/w200` + movie.poster_path;
    return (
      <div>
        <div className='center'>
          <img src={poster} alt="poster" className='poster1' />
          <h1 className='movie'>{movie.title}</h1>
          <h3 className='movie'>{movie.tagline}</h3>
          <a href={movie.homepage}>{movie.homepage}</a>
          <div>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie
import React, { Component } from 'react'
import './Movies.css'
import axios from 'axios'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'

class Movies extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      page: 1,
      key: 'ad985d74904d27ff507c1eeca723dc4e'
    }
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.state.key}&language=en-US&page=` + this.state.page).then(res => this.setState({
      movies: res.data.results
    }))
  }

  pageHandlerNext(){
    this.setState({
      page: this.state.page + 1
    })
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.state.key}&language=en-US&page=` + this.state.page).then(res => this.setState({
      movies: res.data.results,
    }))
  }

  pageHandlerPrev(){
    if(this.state.page !== 1){
      this.setState({
        page: this.state.page -1
      })
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.state.key}&language=en-US&page=` + this.state.page).then(res => this.setState({
        movies: res.data.results
      }))
    }
  }

  handleTopRated = () => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.state.key}&language=en-US&page=${this.state.page}`).then(res => this.setState({
      movies: res.data.results
    })
    )
  }
  
  handleNowPlaying = () => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.state.key}&language=en-US&page=` + this.state.page).then(res => this.setState({
      movies: res.data.results
    }))
  }


  render() {
    console.log(this.state.movies)
    let nowPlaying = this.state.movies.map((el) => {
      let poster = `https://image.tmdb.org/t/p/w200` + el.poster_path;
      return (
        <div key={el.id}>

          <h2 className='Movie_title'>{el.title}</h2>
          <p className='releaseDate'>{el.release_date}</p>
         <Link to={`/movies/${el.id}`} > <img src={poster} alt="" className='poster' /></Link>
        </div>
      )
    })
    return (
      <div>
        <NavBar />
        <div className='container'>
        <h1 className='title'>Now Playing...</h1>
        <button onClick={this.handleNowPlaying}>NOW PLAYING...</button>
        <button onClick={this.handleTopRated}>TOP RATED</button>
        <button></button>

        <div className='movies'>
          {nowPlaying}
        </div>

        <div className='buttons'>
        <button onClick={this.pageHandlerPrev.bind(this)} className='btnNext'>Prev</button>
        <button onClick={this.pageHandlerNext.bind(this)} className='btnNext'>Next</button>
        </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Movies
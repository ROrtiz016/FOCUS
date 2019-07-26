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
      key: 'ad985d74904d27ff507c1eeca723dc4e',
      display: 'now_playing'
    }
  }

  async componentWillMount() {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.state.display}?api_key=${this.state.key}&language=en-US&page=${this.state.page}`)
    this.setState({
      movies: response.data.results
    })
  }

  async componentWillUpdate(){
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.state.display}?api_key=${this.state.key}&language=en-US&page=${this.state.page}`)
    this.setState({
      movies: response.data.results
    })
  }

   handleTabs(str){
    let showing = str
    this.setState({
      display: showing,
      page: 1
    })
   
    this.componentWillUpdate()
  }



  async pageHandlerNext(){
    const nextpage = this.state.page + 1
    this.setState({
      page: nextpage
    })
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.state.display}?api_key=${this.state.key}&language=en-US&page=` + nextpage)
     this.setState({
      movies: response.data.results,
    })
  }

  pageHandlerPrev(){
    const prevpage = this.state.page - 1
    if(this.state.page !== 1){
      this.setState({
        page: prevpage
      })
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.state.key}&language=en-US&page=` + prevpage).then(res => this.setState({
        movies: res.data.results
      }))
    }
  }




  render() {
    let nowPlaying = this.state.movies.map((el) => {
      let poster = `https://image.tmdb.org/t/p/w200` + el.poster_path;
      return (
        <div key={el.id}>
         <Link to={`/movies/${el.id}`} > <img src={poster} alt="" className='poster' /></Link>
         <h2 className='Movie_title'>{el.title}</h2>
         <p className='releaseDate'>{el.release_date}</p>
        </div>
      )
    })

    let pageTitle = () => {
      if(this.state.display === 'now_playing'){
        return "Now Playing on theaters"
      }else if(this.state.display === 'top_rated'){
        return "Top Rated"
      }else if(this.state.display === 'upcoming'){
        return "Upcoming"
      }
    }

    return (
      <div>
        <NavBar />
        <link href="https://fonts.googleapis.com/css?family=Prompt:700&display=swap" rel="stylesheet"></link>
        
        <div className='container'>
        <h1 className='title'>{pageTitle()}</h1>
        <button onClick={this.handleTabs.bind(this, 'now_playing')}>NOW PLAYING...</button>
        <button onClick={this.handleTabs.bind(this, 'top_rated')}>TOP RATED</button>
        <button onClick={this.handleTabs.bind(this, 'upcoming')}>UPCOMING</button>

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
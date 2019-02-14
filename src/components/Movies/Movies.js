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
      page: 1
    }
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ad985d74904d27ff507c1eeca723dc4e&language=en-US&page=' + this.state.page).then(res => this.setState({
      movies: res.data.results
    }))
  }

  pageHandlerNext(){
    this.setState({
      page: 2
    })
  }
  
//   nextPage() {
//     let { page } = this.state;
//     if (!page + 1) {
//         axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=ad985d74904d27ff507c1eeca723dc4e&language=en-US&page= + ${page}`)
//             .then(res => {
//                 if (res.data[0]) {
//                     this.setState({
//                         page: page + 1
//                     })
//                 }
//             })
//             .catch(console.error);
//     } else if (!page + 1) {
//         axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=ad985d74904d27ff507c1eeca723dc4e&language=en-US&page= + ${page}`)
//             .then(res => {
//                 console.log(res.data);
//                 if (res.data[0]) {
//                     this.setState({
//                         page: page + 1
//                     })
//                 }
//             })
//             .catch(console.error);
//     } else {
//         this.setState({
//             page: page + 1
//         })
//     }
// }


  render() {
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
        <h1 className='title'>Now Playing...</h1>
        {console.log(this.state.movies)}
        <div className='movies'>
          {nowPlaying}
        </div>

        <div className='buttons'>
        <button onClick={() => this.pageHandlerNext} className='btnNext'>Next</button>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Movies
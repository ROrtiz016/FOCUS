import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./Movie.css";
import axios from "axios";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      username: "",
      review: "",
      images: [],
      genre: []
    };
  }

  componentDidMount() {
    let key = "ad985d74904d27ff507c1eeca723dc4e";
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=${key}`
      )
      .then(res => {
        this.setState({
          movie: res.data,
          genre: res.data.genres
        });
      });
  }

  handleText(e){
      this.setState({
      review: e.target.value
    })
  }

  render() {
    let movie = this.state.movie;
    let poster = `https://image.tmdb.org/t/p/w200` + movie.poster_path;

    console.log(movie);

    let genre = this.state.genre.map(el => {
      return (
        <div key={el.id}>
          <p>{el.name}</p>
        </div>
      );
    });

    return (
      <div>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />

        <NavBar />
        <div className="Container">
          {/* POSTER  */}
          <img src={poster} alt="poster" className="poster1" />
          <div className="center">
            <h1 className="movie">{movie.title}</h1>
            <h3 className="movie">{movie.tagline}</h3>


            <div className="overview">
              <p>{movie.overview}</p>
            </div>

            <div className="genre">
              <h2>Genres:</h2>
                  {genre}
            </div>


            <a href={movie.homepage} className="overview">
              Visit Homepage
            </a>

            <h1 className="review-container">REVIEWS</h1>

            <div>
              <h1 className="give-review">Share your thoughts</h1>

              <div>
                <textarea
                  placeholder="Did you like the movie"
                  className="input-text"
                  maxLength="1000"
                  onChange={() => this.handleText()}
                />
              </div>

              <button type="submit" value="Submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;

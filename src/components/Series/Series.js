import React,{Component} from 'react'
import NavBar from '../NavBar/NavBar'
import axios from 'axios'
import './Series.css'

class Series extends Component{
  constructor(props){
    super(props)
    this.state ={
      series: [],
      page: 1,
      key: 'ad985d74904d27ff507c1eeca723dc4e',
      display: 'on_the_air'
    }
  }

  componentDidMount(){    
    axios.get(`https://api.themoviedb.org/3/tv/${this.state.display}?api_key=${this.state.key}&language=en-US&page=${this.state.page}`).then((res)=> {
      this.setState({
        series: res.data.results
      })
    })
  }

  async pageHandlerNext(){
    const nextpage = this.state.page + 1
    this.setState({
      page: nextpage
    })
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${this.state.display}?api_key=${this.state.key}&language=en-US&page=` + nextpage)
     this.setState({
      series: response.data.results,
    })
  }
  
  pageHandlerPrev(){
    const prevpage = this.state.page - 1
    if(this.state.page !== 1){
      this.setState({
        page: prevpage
      })
      axios.get(`https://api.themoviedb.org/3/tv/${this.state.display}?api_key=${this.state.key}&language=en-US&page=` + prevpage).then(res => this.setState({
        series: res.data.results
      }))
    }
  }

  render(){
    console.log(this.state.series)

    let seriesMap = this.state.series.map((el)=> {
      let poster = `https://image.tmdb.org/t/p/w200` + el.poster_path;
      return (
        <div key={el.id}>
          <img src={poster} alt="" className='poster'/>
          <h2 className='Movie_title'>{el.name}</h2>
          <p className='releaseDate'>{el.first_air_date}</p>
        </div>
      )
    })

    return (
      <div>
        <NavBar/>

        <div className='container'>

        <div className='movies'>
          {seriesMap}
        </div>

        </div>

        <div className='buttons'>
          <button onClick={this.pageHandlerPrev.bind(this)}>Prev</button>
          <button onClick={this.pageHandlerNext.bind(this)}>Next</button>

        </div>
    

      </div>
    )
  }
}

export default Series;
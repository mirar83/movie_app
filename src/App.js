import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {}
  
  componentDidMount(){
   this._getMovies()

    /*setTimeout(() => {
      this.setState({
        movies: [
          {
            title : "If only",
            poster : "http://image.cine21.com/resize/cine21/poster/2017/1121/9022_5a138ccf0e94d[X230,330].jpg" 
          },
          {
            title : "Oldboy",
            poster : "http://movie.phinf.naver.net/20111222_177/1324537084439rmrVk_JPEG/movie_image.jpg"
          },
          {
            title : "Aquaman",
            poster : "http://img.movist.com/?img=/x00/05/10/29_p1.jpg"
          },
          {
            title : "Bohemian Rhapsody",
            poster : "http://img.movist.com/?img=/x00/05/05/99_p1.jpg"
          },
          {
            title: "Mamma mia",
            poster: "https://images.shazam.com/coverart/t46105537-b284301095_s400.jpg"
          }
        ],
          // ...this.state.movies,
      })
    },1000)*/
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie 
      title={movie.title} 
      poster={movie.medium_cover_image} 
      key={movie.id}
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
    })
    return movies
  } 

  _getMovies = async () =>{
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log('err'))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading' }
      </div>
    );
  }
}

export default App;
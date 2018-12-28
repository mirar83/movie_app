import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>Hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="http://image.cine21.com/resize/cine21/poster/2017/1121/9022_5a138ccf0e94d[X230,330].jpg" />
        )
    }
}

export default Movie;
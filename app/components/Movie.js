import React, { Component } from 'react';

class Movie extends Component{
    

    render(){
        let selectedMovie = this.props.selectedMovie;
        let unmountMovie = this.props.unmountMovie;
        console.log(selectedMovie);
        
        return(
            <div className="overlay" onClick={unmountMovie}>
                    <div className="col-md-12">
            
                       
                            <img className="selected-img" src={selectedMovie.poster_path !==null ? 'http://image.tmdb.org/t/p/w185'+selectedMovie.poster_path : 'http://articleonepartners.com/wp-content/uploads/2015/06/1000px-Clapboard.svg_.png' }></img>
                  
            
                        <div className = "details-container">
                            <h3>{selectedMovie.title}</h3>
                            <h4>Runtime: {selectedMovie.runtime} min</h4>
                            <h4>Score: {selectedMovie.vote_avarage}</h4>
                            <h4>Votes: {selectedMovie.vote_count}</h4>
                            <p>Overview: {selectedMovie.overview}</p>
                            
                        </div>
            
                        <div className="info">Click anywhere to quit</div>
            
                    </div>
            </div>
        )
    }
}

export default Movie;
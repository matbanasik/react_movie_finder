import React, { Component } from 'react';
import Movie from './Movie';

class Gallery extends Component{
    
        constructor(props) {
        super(props);
              this.state = {
                selectedMovie: [],
                showComponent: false,
              };
            this.movieSelected = this.movieSelected.bind(this);
            this.unmountMovie = this.unmountMovie.bind(this);
        }
    

    
  
     movieSelected(id){
        sessionStorage.setItem('movieId', id);
        let movieId = sessionStorage.getItem('movieId');
        console.log(movieId)
         
         
         axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=fa155f635119344d33fcb84fb807649b`).then((response) => {
 
         let selectedMovie = response.data;
             this.setState({
                 selectedMovie: selectedMovie,
                 showComponent: true
             })
            
        })
        .catch((err) => {
            console.log(err);
        })
         
        }
    
    
     unmountMovie(){
            this.setState({
                 selectedMovie: [],
                 showComponent: false,
             })
    }
    
        
    
    
    render(){
        
        return(
            <div className="gallery-container">
            {
                this.props.items.map((movie, index) => {
            
                return(
                    
                        <div key = {index} className="col-md-3">
                            <div className="well text-center">
                            <img className="gallery-img" src={movie.poster_path !==null ? 'http://image.tmdb.org/t/p/w185'+movie.poster_path : 'http://articleonepartners.com/wp-content/uploads/2015/06/1000px-Clapboard.svg_.png' }></img>
                            <h5>{movie.title}</h5>
                            <a onClick={() => this.movieSelected(movie.id)} className='btn btn-primary'>Movie Details</a>
                        </div>
                        </div>
                        
                    )
                })
            }
            {this.state.showComponent ?
            <Movie selectedMovie={this.state.selectedMovie} showComponent={this.state.showComponent} unmountMovie={this.unmountMovie}/> : null
            }
            </div>

        )
        
    }
}

export default Gallery;
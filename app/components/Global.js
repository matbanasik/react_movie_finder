import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'; 
import Gallery from './Gallery';
import Movie from './Movie';



class Global extends Component{
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }
    
    search(){
        
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fa155f635119344d33fcb84fb807649b&query=${this.state.query}`).then((response) => {
 
         let items = response.data.results;
         this.setState({items})
         let output = '';
            
        })
        .catch((err) => {
            console.log(err);
        })
        
    }
    
    render() {
        return(
            <div className = "Global">
                <h2>Movie Finder</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="Search for a movie" onChange = {event => this.setState({query: event.target.value})} onKeyPress = {event => {
                        if (event.key === 'Enter'){
                        this.search()
                        }
                        }}/>
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
<Gallery items={this.state.items}/>

            </div>    
        )
    }
}

export default Global;

import React, { Component } from 'react';
import MovieRowOne from './MovieRowOne';
import $ from 'jquery';

const key = 'f56610dee3836c9b80964e9be6d563c2';
/* https://api.themoviedb.org/3/search/movie?query=marvel&api_key=f56610dee3836c9b80964e9be6d563c2 */
const popularQuery = 'https://api.themoviedb.org/3/movie/popular?api_key=f56610dee3836c9b80964e9be6d563c2'
let data = null;
let img = null;

class carouselOne extends Component {
    constructor(props) {
        super(props)
        
    
        this.state = { carouselItem: <p>FAKE ERRORS</p> }

     
        this.performSearch();

    }

    performSearch() {
        const urlString = 'https://api.themoviedb.org/3/movie/upcoming?api_key=f56610dee3836c9b80964e9be6d563c2';
        $.ajax({
            url: urlString,
            success: (searchResults) => {
              
             
                const results = searchResults.results
                let movieRows = []  
                results.forEach((movie, i) => {
                    movie.id = i ;
                    const posterURL = 'https://image.tmdb.org/t/p/w185';
                    const movieRow = <MovieRowOne
                        movie={movie}
                        posterURL={posterURL}/>
                    movieRows.push(movieRow)
                });
                this.setState({ carouselItem: movieRows });
            },
            error: (xhr, status, err) =>{
                console.error('Failed to Fetch for popular films.')
            }
        })
    }
    

 

    render() {

        return (

           
            <section  className="main-content">
                    <div className="container">
                            <h2>Coming Soon</h2>

                            <div id="carousel-1" className="carousel slide" data-ride="carousel">

                        <div className="multi-item carousel-inner row w-100 mx-auto">
                                                                                
                            {/* CAROUSEL ITEMS */}
                            { this.state.carouselItem }                    

                                    {/*BUTTONS*/}
                                    <a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Prev</span>
                                    </a>


                                    <a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>

                                </div>

                                {/*End of Carousel Inner*/}

                            </div>
                            {/*END OF Carousel Container*/}
                       
                </div>
            
                        {/*END OF CONTAINER*/}
                    </section>



        );
    }

}



export default carouselOne;



import React, {Component } from 'react';
import $ from 'jquery';
// MEDIA QUERY


class Showcase extends Component {
 
    constructor(props) {
        super(props)

        this.state = {
            rows: [

                <div className="carousel-item active">
                    <img className="w-100" src="https://image.tmdb.org/t/p/w1280/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg" alt="First slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>,
                <div className="carousel-item">
                    <img className="w-100" src="https://image.tmdb.org/t/p/w1280/4XYxM4ZHX2mtdZe0z1psNUr7rxK.jpg" alt="Second slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>,
                <div className="carousel-item">
                    <img className="w-100" src="https://image.tmdb.org/t/p/w1280/pWozCsrzMJzN8dbOm330sCKqdml.jpg" alt="Third slide" />
                     <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
                </div>


            ]
        }

        const searchTerm = props.searchTerm;
        this.performSearch(searchTerm);

    }




    performSearch(searchTerm) {
        
        const urlString = 'https://api.themoviedb.org/3/movie/now_playing?api_key=f56610dee3836c9b80964e9be6d563c2';
        $.ajax({
            url: urlString,
            success: (searchResults) => {
               

                const results = searchResults.results
                let movieRows = []
                results.forEach((movie, i) => {
                  

                    movie.id = i;
                    const backdropURL = 'https://image.tmdb.org/t/p/w1280';
                    const movieRow =

                        <div className={"carousel-item " + (movie.id === 0 ? 'active' : '')}>
                            <img className="w-100" src={backdropURL + movie.backdrop_path} alt="First slide" />
                            <div class="carousel-caption" style={{ position: "absolute", top:'35%' }}>
                                <h1 style={titleStyle}>{movie.title}</h1>
                                <button style={buttonStyle}>Get Tickets</button>
                            </div>
                        </div>;
                    movieRows.push(movieRow)
                });
                this.setState({ rows: movieRows });
            },
            error: (xhr, status, err) => {
                console.error('Failed to Fetch for popular films.')
            }
        })
    }




    render() {


        return (

            <section style={{ 'margin-top': '-4rem' }}>
                <div id="showcase" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {this.state.rows}
                                </div>
                                <a className="carousel-control-prev" href="#showcase" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#showcase" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

            </section>
   
           
            
            );

    }

}

export default Showcase;
const buttonStyle = {
    background: 'var(--main-color)',
    border: 'none',
    'font-weight': '800',
    padding: '.75rem',
    color: 'var(--main-light)',
    'border-radius': '1rem'

}

const titleStyle = {
    color: 'var(--main-light)',
    textShadow: '0px 0px 20px #000000'
}

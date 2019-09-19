import React, { Component } from 'react';
import $ from 'jquery';


class search extends Component {
    constructor(props) {
        super(props)

        const movies = [
            { id: 0, title: 'Avengers: End Game', poster_path: 'https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg' },
            { id: 1, title: 'Avengers: Infiinity War', poster_path: 'https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' }
        ]

        this.state = {
            rows: []
        }

        const searchTerm = props.searchTerm;
        this.performSearch(searchTerm);
               
    }




    performSearch(searchTerm) {
        console.log('performing search using movieDB data');
        const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=f56610dee3836c9b80964e9be6d563c2&query=' + searchTerm;
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log(searchResults)

                const results = searchResults.results
                let movieRows = []
                results.forEach((movie, i) => {
                    console.log(movie.poster_path);
                 
                    movie.id = i;
                    const posterURL = 'https://image.tmdb.org/t/p/w185';
                    const movieRow = <div id={movie.id} className="card-item">
                        <a href="#"><img className="card-img-top img-fluid" src={movie.poster_path == null ? 'https://via.placeholder.com/200x375?text=NOT+AVAILABLE':`${posterURL}${movie.poster_path}`} alt={movie.title} />
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">
                                {movie.title}
                            </h4>
                            <button style={buttonStyle} className="card-text">
                                Get Tickets</button>
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
            <div className="container">
                <div style={searchStyle} className="search-container">
                    {this.state.rows}
                </div>
            </div>
        )

    }
    
}

export default search;


const searchStyle = {
    display: 'grid',
    'grid-gap': '2rem',
    'grid-template-columns': 'repeat(3, 33.33%)',
    margin: '20rem 5rem',
    padding: '0 4rem',
    'text-align': 'center'

}

const buttonStyle = {
    background: 'var(--main-color)',
    border: 'none',
    'font-weight': '800',
    padding: '.75rem',
    color: 'var(--main-light)',
    'border-radius': '1rem'

}


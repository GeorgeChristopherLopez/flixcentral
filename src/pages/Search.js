import React, { Component } from 'react';

class search extends Component {
    constructor(props) {
        super(props)

        const movies = [


        ]

        this.state = {
            rows: [

                <div className="searches">
                    <h1>Search</h1>
                    <p>These are the search results from the search page</p>
                </div>,

                <div className="searches">
                    <h1>Search</h1>
                    <p>These are the search results from the search page</p>
                </div>,

                <div className="searches">
                    <h1>Search</h1>
                    <p>These are the search results from the search page</p>
                </div>

            ]
        }




    }






    render() {
        return (

            <div style={searchStyle} className="search-container">
                {this.state.rows}
            </div>
        )

    }
    
}

export default search;


const searchStyle = {
    display: 'grid',
    'grid-gap': '2rem',
    'grid-template-columns': 'repeat(3, 30%)',
    margin: '20rem 5rem',
    padding: '0 4rem',
    'text-align': 'center'

}
import React from 'react';

class movieRowTwo extends React.Component {
    render() {

        return <div key={this.props.movie.id} className={"carousel-item col-md-3 thumbnail " + (this.props.movie.id === 0 ? 'active' : '')}


        >
            <div className="card-item">
                <a href="#"><img className="card-img-top img-fluid" src={this.props.posterURL + this.props.movie.poster_path} alt={this.props.movie.title} />
                </a>
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.movie.title}
                    </h4>
                    <button style={buttonStyle} className="card-text">
                        Get Tickets</button>
                </div>
            </div>
        </div>
    }
}

export default movieRowTwo;


const buttonStyle = {
    background: 'var(--main-color)',
    border: 'none',
    'font-weight': '800',
    padding: '.75rem',
    color: 'var(--main-light)',
    'border-radius': '1rem'

}


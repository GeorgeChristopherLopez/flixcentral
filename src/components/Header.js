import React, { Component } from 'react';

//import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { ic_search } from 'react-icons-kit/md/ic_search';
// MEDIA QUERY
import { generateMedia } from 'styled-media-query';





class Header extends Component {
    render() {
        return (
          

            <nav style={headerStyle} className="navbar navbar-expand-lg navbar-dark header-container px-5">
               
                <a className="navbar-brand col-xs-12 col-md-9" href="#">FLEX CENTRAL</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
               
                <div className="collapse navbar-collapse col-xs-12 col-md-3" id="navbarNav">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
          
           
      
            );
    }


}



export default Header;

const headerStyle = {
    background: 'var(--main-color)',
    color: 'var(--main-light)'
}

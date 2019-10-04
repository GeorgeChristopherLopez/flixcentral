import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_search } from 'react-icons-kit/md/ic_search';
import { Link } from 'react-router-dom';


class Header extends Component {
    render(){
        return (
            <header className="App-header" >
                <nav className="navbar navbar-expand-lg navbar-dark bg-danger">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="\">Marvel</Link>
                    <div className="offset-1"></div>


                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="\">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="\">Characters</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="\">Comics</Link>
                            </li>
                        </ul> 
                    </div>

                    <div>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2 header-input" type="search" placeholder="Search" aria-label="Search" /><Icon style={headerIconStyle} size={32} icon={ic_search} />
                         </form>
                    </div>
                    
</nav>
               
            </header>


        );


    }
    
}

export default Header;


const headerIconStyle = {
    color: 'white'

}


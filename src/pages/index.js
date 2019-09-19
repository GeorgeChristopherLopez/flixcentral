import React, { Component } from 'react';
import Header from '../components/Header';
import PageNav from '../components/PageNav';
import MainPage from './MainPage';
import Footer from '../components/Footer';
import Showcase from '../components/Showcase';
import Search from './Search';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            showingSearchBar: false

        }

    }
   

    showingSearchBarHandler = () => {
        this.setState({ showingSearchBar: !this.state.showingSearchBar })
    }

    searchChangeHandler = (e) => {
        this.setState({ searchTerm : e.target.value })

    }

    render() {

        return (
            <Router>
                <div>
                    <Header
                        show={this.state.showingSearchBar}
                        changed={this.searchChangeHandler}
                        clicked={this.showingSearchBarHandler} />
                    <Route exact path="/" render={props => (
                        <React.Fragment>

                            <Showcase />
                            <PageNav />

                            <MainPage />



                        </React.Fragment>
                        
                        
                    )} />
                    <Route
                        path="/search"
                        component={(props) => <Search  {...props} searchTerm={this.state.searchTerm} />} />
              
                <Footer />
            </div>
            </Router>
            
            );
    }

}

export default Main;
import React, { Component } from 'react';
import Header from '../components/Header';
import PageNav from '../components/PageNav';
import MainPage from './MainPage';
import Footer from '../components/Footer';
import Showcase from '../components/Showcase';
import Search from './Search';
import { BrowserRouter as Router, Route } from 'react-router-dom';



export default class Main extends Component {
    render() {

        return (
            <Router>
            <div>
                    <Header />
                    <Route exact path="/" render={props => (
                        <React.Fragment>

                            <Showcase />
                            <PageNav />

                            <MainPage />



                        </React.Fragment>
                        
                        
                    )} />
                    <Route path="/search" component={Search} />
              
                <Footer />
            </div>
            </Router>
            
            );
    }

}
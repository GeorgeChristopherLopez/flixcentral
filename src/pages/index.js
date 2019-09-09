import React, { Component } from 'react';
import Header from '../components/Header';
import PageNav from '../components/PageNav';
import MainPage from '../components/MainPage';
import Footer from '../components/Footer';
import Showcase from '../components/Showcase';




export default class Main extends Component {
    render() {

        return (
            <div>
                <Header />
                <Showcase />
                <PageNav />
                <MainPage/>
                <Footer />
            </div>
            
            
            );
    }

}
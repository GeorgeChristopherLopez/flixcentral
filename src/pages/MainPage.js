import React, { Component } from 'react';

import CarouselOne from '../components/carousels/CarouselOne';
import CarouselTwo from '../components/carousels/CarouselTwo'; 
import CarouselThree from '../components/carousels/CarouselThree'; 


class MainPage extends Component {
  
    render() {

        return (
            <div style={mainStyle}>
                <CarouselOne />

                <hr />

                <CarouselTwo />

                <hr />

                <CarouselThree />

                <hr />

            </div>
        );
    }

}


export default MainPage;

const mainStyle = {
    padding: '4rem 2rem'

}


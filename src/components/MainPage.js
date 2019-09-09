import React, { Component } from 'react';

import CarouselOne from './carousels/CarouselOne';
import CarouselTwo from './carousels/CarouselTwo'; 
import CarouselThree from './carousels/CarouselThree'; 


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


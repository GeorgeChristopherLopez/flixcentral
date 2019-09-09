import React, {Component } from 'react';
import styled from 'styled-components';
// MEDIA QUERY
import { generateMedia } from 'styled-media-query';

class Showcase extends Component {
    render() {
        return (
            <ShowcaseComponent className="showcase-container">
                <div className="showcase-content">
                    <PreTitle>Now Playing</PreTitle>
                    <Title>Fast & Furious Presents: Hobbs & Shaw</Title>
                    <button className="genre-tag">Get Tickets</button>
                </div>
            </ShowcaseComponent>
            
            
            );

    }

}

export default Showcase;

// MEDIA QUERY
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px'


});


const ShowcaseComponent = styled.section`

////////// SHOWCASE CONTENT //////////////////////////
    .showcase-content{



      padding: 7rem;
        padding-top: 17rem;
    display: block;

    text-align: left;
    flex-direction: column;
    z-index: 1;
 
    }

    // genre-tag
     .genre-tag{
        border: none;
   
        padding: .75rem 1.5rem;
        font-weight: 400;
        line-height: normal;
        border-radius: .5rem;
        font-size: 1rem;
        background: var(--main-color);
        color: var(--main-light);
        font-weight: 800;
        cursor: pointer;
        transition: background 0.2s ease-in;
        &:hover {
            background: var(--main-color-hover);
       
  
        }


    }



`
// MAIN TITLE

const Title = styled.h1`
        margin: 0 0 1.2rem;
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1.1em;
   ${customMedia.lessThan('tablet')`
            font-size: 2.6rem;
            

        `}
        

`

//SubTitle
const PreTitle = styled.h3`
   font-weight: 400;
font-size: 1.875rem;
line-height: 1.5rem;
margin: 0 0 1.875rem;
text-transform: uppercase;

   ${customMedia.lessThan('smTablet')`
            font-size: 1.4rem;
            margin: 0;
            

        `}














`;
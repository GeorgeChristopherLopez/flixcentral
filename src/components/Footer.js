import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import Icon from 'react-icons-kit';
//import { iosWorld } from 'react-icons-kit/ionicons/iosWorld/';
//import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown/';
import { generateMedia } from 'styled-media-query';
import moviedbLogo from '../img/moviedb.svg';

class Footer extends Component {
    state = {
        langContent : false


    }

    handleToggle = (e) => {
        e.preventDefault();
        this.setState({
            langContent: !this.state.langContent
        })

    }



    render() {
        return (
            <FooterContainer>
                <div style={copyrightStyle}>
                    <h4>FLIX CENTRAL</h4>
                    <p> <span>Powered by <img style={{ height: "3rem" }} src={moviedbLogo} alt="MOVIEDB"/></span></p>
                </div>
                <div className="footer-columns">
                    <ul>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li><Link to="/">Ways to Watch</Link></li>
                        <li><Link to="/">Corporate Information</Link></li>
                        <li><Link to="/">Flix Central History</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Help Center</Link></li>
                        <li><Link to="/">Jobs</Link></li>
                        <li><Link to="/">Terms of Use</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Account</Link></li>
                        <li><Link to="/">Redeem Gift Cards</Link></li>
                        <li><Link to="/">Privacy</Link></li>
                        <li><Link to="/">Speed Test</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Media Center</Link></li>
                        <li><Link to="/">Buy Gift Cards</Link></li>
                        <li><Link to="/">Cookie Preferences</Link></li>
                        <li><Link to="/">Legal Notice</Link></li>
                    </ul>
                    {/*LANGUAGE BUTTON*/}

                  
                    

                </div>
               
            </FooterContainer>    
            );
        
    }


}


export default Footer;
// MEDIA 
const customMedia = generateMedia({
    tablet: '740',
    mdDesktop: '1000px'
})

const copyrightStyle = {
    padding: '.25rem',
    textAlign: 'center'
}

// FOOTER CONTAINER
const FooterContainer = styled.footer`
background: var(--main-dark);

padding-top: 3rem;
padding-bottom: 3rem;
color: #999;

.footer-columns {
width: 70%;
margin: 1rem auto 0;
font-size: 0.9rem;
overflow: auto;
display : grid;
grid-template-columns: repeat(4,1fr);
${customMedia.lessThan('mdDesktop')`
      grid-template-columns: repeat(2,1fr);
      
`}

}

ul li{
list-style: none;
line-height: 2.5;
color: #999;

}

a:hover{
text-decoration: underline;
cursor: pointer;
}




`;



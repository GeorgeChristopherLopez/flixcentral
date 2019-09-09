import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld/';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown/';
import { generateMedia } from 'styled-media-query';


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
                <div style={copyrightStyle}><p>FLIX CENTRAL</p></div>
                <div className="footer-columns">
                    <ul>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li><Link>Ways to Watch</Link></li>
                        <li><Link>Corporate Information</Link></li>
                        <li><Link>Flix Central History</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Help Center</Link></li>
                        <li><Link>Jobs</Link></li>
                        <li><Link>Terms of Use</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Account</Link></li>
                        <li><Link>Redeem Gift Cards</Link></li>
                        <li><Link>Privacy</Link></li>
                        <li><Link>Speed Test</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Media Center</Link></li>
                        <li><Link>Buy Gift Cards</Link></li>
                        <li><Link>Cookie Preferences</Link></li>
                        <li><Link>Legal Notice</Link></li>
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
    'text-align': 'center'
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

//Language Button

.lang-btn{
background: transparent;
border: 0.9px solid #333;
padding: 1rem;
width: 8rem;
display: grid;
grid-template-columns: repeat(3,1fr);
margin: 2rem 0 2rem;
cursor: pointer;
}

//TOGGLE LANGUAGE CONTENT

.lang-toggle{
    margin-left: 15%;
    position: absolue;
    margin-top: -3rem;
    
   

}



.lang-toggle ul{
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    text-align: center;
   &:hover{
        background: #0085ff;
        color: #fff;
    }
 
}


`;


// LIST
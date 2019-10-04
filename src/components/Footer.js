import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <footer style={footer}>
                <div className="container">
                 
                <div className="footer-columns" style={columns}>
                    <ul>
                        <li><Link to="/">Powered by MARVEL API</Link></li>
                     
                     
                    </ul>
                    <ul>
                        <li><Link to="/">About Marvel</Link></li>
                        <li><Link to="/">Help / FAQ</Link></li>
                        <li><Link to="/">Careers</Link></li>
                        <li><Link to="/">Internships</Link></li>
                        
                    </ul>
                    <ul>
                        <li><Link to="/">Advertising</Link></li>
                        <li><Link to="/">MarvelHQ.Com</Link></li>
                        <li><Link to="/">Redeem Digital Comics</Link></li>
                      
                    
                    </ul>
                    <ul>
                        <li><Link to="/"><div>Marvel Insider</div></Link></li>
                        <li><Link to="/"><div>Marvel MaserCard</div></Link></li>
                    </ul>
                   
                        <ul>
                            <li><Link to="/">Follow Us</Link></li>
                            <li><Link to="/">Twitter</Link></li>
                            <li><Link to="/">Facebook</Link></li>
                            <li><Link to="/">Instagram</Link></li>

                        </ul>



                    </div>
                </div>
                <div style={{ background: 'red' }}>
                    <ul style={{ display: 'grid', gridGap: '.4rem', gridTemplateColumns: 'repeat(8, auto)', fontSize: '.75rem' }}>
                        <li><Link to="/">Terms of Use</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Your Privacy Rigths</Link></li>
                        <li><Link to="/">Childrens Online Privacy Policy</Link></li>
                        <li><Link to="/">License Agreement</Link></li>
                        <li><Link to="/">Interest Based Ads</Link></li>
                        <li><Link to="/">Marvel Insider Terms</Link></li>
                        <li><Link to="/">&copy; 2019 Marvel</Link></li>

                    </ul>
                </div>
            </footer>


        );


    }

}

export default Footer;

const footer = {
    background: '#000000'
}
const copyrightStyle = {
    padding: '.25rem',
    textAlign: 'center'
}

const columns = {
    display: 'flex'
}


import React, { Component } from 'react';
import styled from 'styled-components';




 class PageNav extends Component {
    render() {

        return (
            <PageNavComponent style={bgStyle}>
                <div style={overlay} className="page-nav-container">
                    <button>In Theaters</button>
                    <button>Coming Soon</button>
                    <button> On Television</button>

                </div>



            </PageNavComponent>
            


        );
    }

}

export default PageNav;



// MEDIA 
const bgStyle = {

}

const overlay = {
    background: 'rgba(0, 0, 0, 0.7)'
}


const PageNavComponent = styled.section`
		.page-nav-container{
				display: block;
				padding: 4rem 2rem;
				margin: 0 auto;
			text-align: center;


		}

		button{
			background: transparent;
			border: 3px solid var(--main-color);
			padding: 1rem 2rem;
			color: var(--main-light);
			font-weight: 400;
			margin: 0 2rem;
			font-size: 1.5rem;
&:hover{
background: var(--main-color-hover);
border: 3px solid var(--main-color-hover);

}
		}





`;
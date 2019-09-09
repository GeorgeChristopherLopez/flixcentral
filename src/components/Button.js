import styled from 'styled-components';


export const Button = styled.button`

// TAB COMPONENTS Btn

   
        display: inline-block;
        background: var(--main-red);
        color: var(--main-white);
       text-transform: uppercase;
        border: none;
        outline: none;
        margin: ${props => props.primary ? '0 33%': '0'};
        padding:  ${props => props.primary ? '1.5rem' : '.8rem 1.3rem'};
        border-radius: 0.1875rem;
        font-size:  ${props => props.primary ? '2rem' : '1rem'};
        text-align: center;
        box-shadow: 0 1px 0 rgba(0,0,0,0.45);
        transition: 0.2s ease-in;
        cursor: pointer;
         &:hover {
            background: var(--main-red-hover)
        }
    }




`;
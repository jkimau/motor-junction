import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
        'Lucida Grande', sans-serif;
        font-weight: 300;
        font-size: 16px;
        margin: 0;
        padding: 0;
        background-color: #111312;
        color: #E3C163;
    }
    
    a {
        text-decoration: none;
        color: #108db8;
        font-weight: bold;
    }
    
    img {
        max-width: 100%;
    }
    
    nav {
        width: 100%;
        background: #108db8;
    }
    
    nav a {
        color: white;
        padding: 1rem;
        display: inline-block;
    }
    
    .content {
        padding: 1rem;
    }
`;
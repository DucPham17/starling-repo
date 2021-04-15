import React from 'react';
import './style.css';
import {Container} from 'react-bootstrap'

const Footer = () => {
    return (
        <Container className='footer' fluid bg="dark" variant="dark"> 
            <h5> Starling Group </h5>
            <h5> Augustana College </h5>
        </Container>
    )    
}
export default Footer
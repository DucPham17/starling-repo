import React from 'react';
import {Button, Container, Row, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import logo from '../constant/logo192.png'
import cat from '../constant/cat.jpg'
import './style.css';

const Header = () => {

    return (
        <div> 
            {/*<Row> 
                <img src={logo} className='logoImage'/>
                <h3  className='appName'> Starling </h3>
                
                <img src={cat} className='userImage'/>
                <h3  className='userName'> User's Name</h3>
            </Row>*/}
            <Navbar col lapseOnSelect id='navbar' expand='lg' bg='dark' variant='dark'>
                <img src={logo} className='logoImage'/>
                <Navbar.Brand className='appName'> 
                    STARLING
                </Navbar.Brand>
                
                <NavDropdown title="Account" id="collasible-nav-dropdown" className='userName'>
                    <img src={cat} className='userImage'/>
                    <NavDropdown.Item href="">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="">Sign Out</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
            
        </div>
    )

    
}
export default Header
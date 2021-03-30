import React from 'react';
import {Button, Container, Row, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import logo from '../constant/logo192.png'
import cat from '../constant/cat.jpg'
import './style.css';
import { useHistory } from 'react-router';

const Header = () => {
    const history = useHistory();

    return (
        <div> 
            {/*<Row> 
                <img src={logo} className='logoImage'/>
                <h3  className='appName'> Starling </h3>
                
                <img src={cat} className='userImage'/>
                <h3  className='userName'> User's Name</h3>
            </Row>*/}
            <Navbar col lapseOnSelect id='navbar' expand='lg' bg='dark' variant='dark'>
                <Navbar.Brand className='appName' onClick={() => history.push('/')}> 
                    <img src={logo} className='logoImage mr-2'/>
                    STARLING
                </Navbar.Brand>
                
                <NavDropdown title="Account" id="collasible-nav-dropdown" className='userName'>
                    <img src={cat} className='userImage'/>
                    <NavDropdown.Item href='/home'>Profile</NavDropdown.Item>
                    <NavDropdown.Item href='/home'>Sign Out</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
            
        </div>
    )

    
}
export default Header
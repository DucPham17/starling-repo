import React from 'react';
import {Navbar, NavDropdown} from 'react-bootstrap'
import cat from '../resources/images/cat.jpg'
import './style.css';
import { useHistory } from 'react-router';
import { Logo } from './common/Logo';

const Header = () => {
    const history = useHistory();

    return (
        <div> 
            <Navbar col lapseOnSelect id='navbar' expand='lg' bg='dark' variant='dark'>
                <Navbar.Brand className='appName' onClick={() => history.push('/')}> 
                    <Logo/>
                </Navbar.Brand>
                
                <NavDropdown title="Account" id="collasible-nav-dropdown" className='userName'>
                    <img src={cat} className='userImage'/>
                    <NavDropdown.Item href='/home'>Profile</NavDropdown.Item>
                    <NavDropdown.Item href='/'>Sign Out</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
            
        </div>
    )

    
}
export default Header
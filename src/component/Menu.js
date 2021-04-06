import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './style.css';
import {useHistory, useLocation} from 'react-router-dom'
import routes from '../constant/routes'

/*const routes = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/dashboard',
        label: 'Dashboard'
    },
    {
        href: '/report',
        label: 'Report'
    },
    {
        href: '/lists',
        label: 'Lists'
    },
    
];*/
const Menu = () => {
    const location = useLocation();
    const history = useHistory();

    return (
        <div> 
            <Navbar className='menu' >
                <Nav className='flex-column'> 
                    {routes.map((route) => 
                        <Nav.Item>
                            <Nav.Link 
                                onClick={() => history.push(route.href)}
                                active={location.pathname === route.href}>
                                <p style={{fontSize:'20px'}}>{route.label}</p>
                            </Nav.Link>
                        </Nav.Item>
                    )}
                </Nav>
            </Navbar>
            
        </div>
    )

    
}
export default Menu
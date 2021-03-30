import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './style.css';
import {Link, NavLink, Route, Router, useLocation} from 'react-router-dom'


const routes = [
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
    
];
const Menu = () => {
    const location = useLocation();
    return (
        <div> 
            <Navbar>
                <Nav className='flex-column'> 
                {
                    routes.map((route) => 
                    <Nav.Item>
                        <Nav.Link 
                        href={route.href}
                        active={location.pathname === route.href}>
                        <p>{route.label}</p>
                        </Nav.Link>
                    </Nav.Item>
                    )
                }
                </Nav>
            </Navbar>
            
        </div>
    )

    
}
export default Menu
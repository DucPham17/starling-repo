import React from 'react';
import {Button, Container, Row, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import './Homepage.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="grid-container">
            <h1 className="grid-container--header">
                Welcome to our Workspace.
            </h1>
            <div className="grid-container--body">
                Wasting time and energy trying to stay organized? We can help. Our app is designed to manage your tasks, expenses, and schedules into a personalised dashboard. 
            </div>
            <div className="grid-container--brand">
                <Link to="/signUp">
                    <Button variant="secondary">
                    <EventAvailableIcon style={{ fontSize: 20, color: '#aaa', marginRight: 6 }} />
                    Try our Workpace</Button>
                </Link>
            </div>
            <div className="grid-container--body">
                <Link to="/login">
                    Already Have an Account? Sign In.
                </Link>
            </div>
        </div>
    )
}
export default Home
 
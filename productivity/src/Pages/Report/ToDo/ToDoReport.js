import {Button, Row, Col, Modal, Form, Card, Nav} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import '../Report.css';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import ToDoGraph from './ToDoGraph'

const routes = [
    {
        href: '/report/todo/3recentdays',
        label: '3 Recent Days'
    },
    {
        href: '/report/todo/OneWeek',
        label: 'One Week'
    },
    {
        href: '/report/todo/ComingSoon',
        label: 'Coming Soon'
    }
]

const ToDoReport = () => {
    const history = useHistory();
    const location = useLocation();

    return (
        <div>
            <Nav variant="tabs">
                {
                    routes.map((route) => (
                        <Nav.Item style={{fontSize:'18px'}}>
                            <Nav.Link 
                                key={route.href}
                                active={location.pathname.startsWith(route.href)}
                                onClick={() => history.push(route.href)}
                            >
                                {route.label}
                            </Nav.Link>
                        </Nav.Item>
                    ))
                }
            </Nav>
            <Switch>
                <Route path="/report/todo/:id" component={ToDoGraph}/>
            </Switch>
        </div> 
    )
}
export default ToDoReport
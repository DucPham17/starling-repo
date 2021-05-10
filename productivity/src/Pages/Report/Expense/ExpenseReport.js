import {Nav, Tabs, Tab, Row, Col} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import '../Report.css';
import ExpenseGraph from './ExpenseGraph'
import ExpenseInfo from './ExpenseInfo'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

const routes = [
    {
        href: '/report/expense/3recentdays',
        label: '3 Recent Days'
    },
    {
        href: '/report/expense/OneWeek',
        label: 'One Week'
    }
]

const ExpenseReport = () => {
    const history = useHistory();
    const location = useLocation();

    return (
        <div>
            <Nav variant="tabs">
                {
                    routes.map((route) => (
                        <Nav.Item>
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
                <Route path="/report/expense/:id" component={ExpenseGraph}/>
            </Switch>
        </div> 
        
    )
}
export default ExpenseReport
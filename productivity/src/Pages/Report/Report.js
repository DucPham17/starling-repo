import {Nav} from 'react-bootstrap'
import React from 'react'
import './Report.css';
import ToDoReport from './ToDo/ToDoReport'
import ExpenseReport from './Expense/ExpenseReport'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

const routes = [
    {
        href: '/report/expense/3recentdays',
        label: 'Expense'
    },
    {
        href: '/report/todo/3recentdays',
        label: 'Todos'
    }
]

const Report = () => {
    const history = useHistory();
    const location = useLocation();

    return (
        <div>
            <Nav variant="tabs">
                {
                    routes.map((route) => (
                        <Nav.Item variant='light' style={{fontSize:'18px'}}>
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
                <Route path="/report/expense" component={ExpenseReport}/>
                <Route path="/report/todo" component={ToDoReport}/>
            </Switch>
        </div> 
    )
}
export default Report
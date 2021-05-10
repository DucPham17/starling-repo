import {Nav, Tab,Tabs} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import './Report.css';
import { getData, deleteData, filterData } from '../../Action/expenseAction'
import { getTodos, toggleTodos, deleteTodo } from '../../Action/todosAction';
import ToDoReport from './ToDoReport'
import ExpenseReport from './Expense/ExpenseReport'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

const routes = [
    {
        href: '/report/expense',
        label: 'Expense'
    },
    {
        href: '/report/todo',
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
                <Route path="/report/expense" component={ExpenseReport}/>
                <Route path="/report/todo" component={ToDoReport}/>
            </Switch>
        </div> 
    )
}
export default Report
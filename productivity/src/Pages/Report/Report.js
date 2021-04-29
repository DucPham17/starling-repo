import {Button, Row, Col, Modal, Form, Card, Nav} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import './Report.css';
import { getData, deleteData, filterData } from '../../Action/expenseAction'
import { getTodos, toggleTodos, deleteTodo } from '../../Action/todosAction';
import ToDoReport from './ToDoReport'
import ExpenseReport from './ExpenseReport'
import { Route, Switch } from 'react-router-dom';
const Report = () => {
    const infoUser = useSelector(state => state.user);
    const infoExpense = useSelector(state => state.expense.expense);
    const {todos, selectedDate} = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href='/report/todo'>Notes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/report/expense">Expenses</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div>
                <Switch>
                    <Route exact path="/report/todo" component={ToDoReport} /> 
                    <Route path="/report/expense" component={ExpenseReport} />  
                </Switch>
            </div>   
        </div> 
    )
}
export default Report
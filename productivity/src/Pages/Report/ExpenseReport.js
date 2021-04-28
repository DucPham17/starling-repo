import {Button, Row, Col, Modal, Form, Card, Nav} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import './Report.css';
import { getData, deleteData, filterData } from '../../Action/expenseAction'
import { getTodos, toggleTodos, deleteTodo } from '../../Action/todosAction';

const ExpenseReport = () => {
    const infoUser = useSelector(state => state.user);
    const infoExpense = useSelector(state => state.expense.expense);
    const {todos, selectedDate} = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <Row> 
                <Col sm={6}> 
                    <p> Expense-Info</p>
                </Col>
                <Col sm={6}>
                    <p> Expense-Graph</p>
                </Col>
            </Row>
        </div> 
    )
}
export default ExpenseReport
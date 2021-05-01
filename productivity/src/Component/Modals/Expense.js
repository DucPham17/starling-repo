import React, { useEffect, useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
import { addData, updateData } from '../../Action/expenseAction'

export const Expense = (props) => {
    const infoUser = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [choice, setChoice] = useState('')

    const handleAdd = (nameExpense, amountExpense, choice, date) => {
        dispatch(addData(infoUser.userInfo.uid, nameExpense, amountExpense, choice, date))
    }

    return (
        <Modal show={props.show} onHide={props.onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title> Add New Expense </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Name of Expense 
                        </Form.Label>
                        <Form.Control required
                            type="text"
                            onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Amount of Expense 
                        </Form.Label>
                        <Form.Control required
                            type="number"
                            onChange={(e) => setAmount(e.target.value)}/>
                        <Form.Control.Feedback type="invalid">
                            Please type a number
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Type of Expense 
                        </Form.Label>
                        <Form.Control as='select' required
                            defaultValue = 'Pick one...'
                            onChange={(e) => setChoice(e.target.value)}>
                            <option>
                                Pick one...
                            </option>
                            <option>
                                Spending
                            </option>
                            <option>
                                Earning
                            </option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant='primary' onClick = {() => handleAdd(name, amount, choice, new Date().getTime())}> Save </Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal> 
    ) 
}
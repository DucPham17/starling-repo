import React, { useEffect, useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
import { addData, updateData } from '../../Action/expenseAction'
import { GetAction, UpdateAction } from '../../Action/updateAction'

export const Update = (props) => {
    const infoUser = useSelector(state => state.user);
    const infoUpdate = useSelector(state => state.update);
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [choice, setChoice] = useState('')

    const handleUpdate = (nameExpense, amountExpense, choice) => {
        const item = {
            name:nameExpense,
            amount: amountExpense, 
            expenseType:choice
        }
        dispatch(updateData(infoUser.userInfo.uid, infoUpdate.date, item))
    }
    
    useEffect(() => {
        dispatch(GetAction())        
    }, [])
    console.log(infoUpdate)
    return (
        <Modal show={props.show} onHide={props.onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title> Update Expense </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Name of Expense 
                        </Form.Label>
                        <Form.Control
                            defaultValue={infoUpdate.name}
                            onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Amount of Expense 
                        </Form.Label>
                        <Form.Control
                            defaultValue={infoUpdate.amount} 
                            onChange={(e) => setAmount(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Type of Expense 
                        </Form.Label>
                        <Form.Control as='select'
                            defaultValue={infoUpdate.expenseType}
                            onChange={(e) => setChoice(e.target.value)}>
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
                    <Button variant='primary' onClick = {() => handleUpdate(name, amount, choice)}> Save </Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal> 
    ) 
}
import React, { useEffect} from 'react';
import {Button, Modal, Form} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
import { updateData } from '../../Action/expenseAction'
import { GetAction, SetAction } from '../../Action/updateAction'

export const Update = (props) => {
    const infoUser = useSelector(state => state.user);
    const infoUpdate = useSelector(state => state.update);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        const item = {
            name: infoUpdate.name,
            amount: infoUpdate.amount, 
            expenseType: infoUpdate.expenseType
        }
        dispatch(updateData(infoUser.userInfo.uid, infoUpdate.date, item))
    }
    
    useEffect(() => {
        dispatch(GetAction())        
    }, [])

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
                        <Form.Control required
                            defaultValue={infoUpdate.name}
                            onChange={(e) => dispatch(SetAction('name', e.target.value))}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Amount of Expense 
                        </Form.Label>
                        <Form.Control required
                            type="number"
                            defaultValue={infoUpdate.amount} 
                            onChange={(e) => dispatch(SetAction('amount', e.target.value))}/>
                        <Form.Control.Feedback type="invalid">
                            Please type a number
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Type of Expense 
                        </Form.Label>
                        <Form.Control as='select' required
                            defaultValue={infoUpdate.expenseType}
                            onChange={(e) => dispatch(SetAction('expenseType', e.target.value))}>
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
                    <Button variant='primary' onClick = {() => handleUpdate()}> Save </Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal> 
    ) 
}
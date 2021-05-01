import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {Button, Row, Col, Modal, Form, Card} from 'react-bootstrap'
import { getData, deleteData, filterData } from '../../Action/expenseAction'
import './Expense.css';
import { ModalTypes } from '../../Constant/modalTypes';
import {setModal} from '../../Action/modalsAction';
import {GetAction, UpdateAction} from '../../Action/updateAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const CardItem = (item) => {
    const expenseItem = item.item
    const infoUser = useSelector(state => state.user);
    const infoExpense = useSelector(state => state.expense.expense);
    const infoUpdate = useSelector(state => state.update);
    const infoFilter = useSelector(state => state.filter);

    const dispatch = useDispatch();

    const handleDelete = (date) => {
        dispatch(deleteData(infoUser.userInfo.uid, date))
    }

    const recent = new Date(expenseItem.date)
    return (
        <Card className='card'> 
            <Card.Body >
                <Row> 
                    <Col> 
                        <Card.Title> 
                            Name: {expenseItem.name}
                        </Card.Title>
                        <Card.Text>
                            <p>Amount: {expenseItem.amount}</p>
                            <p>Type: {expenseItem.expenseType}</p>
                        </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text>
                            {recent.getMonth() + 1}/{recent.getDate()}/{recent.getFullYear()}
                        </Card.Text> 
                        <EditIcon onClick={() => {dispatch(UpdateAction(expenseItem)); dispatch(setModal(ModalTypes.UPDATE))}}> Edit </EditIcon>
                        <DeleteIcon onClick={()=> handleDelete(expenseItem.date)}> Delete </DeleteIcon>
                    </Col>
                </Row>
                {/* <Card.Header>
                    {recent.getMonth() + 1}/{recent.getDate()}/{recent.getFullYear()}
                </Card.Header>
                <Card.Title> 
                    {expenseItem.name}
                </Card.Title>
                <Card.Text>
                    <p>{expenseItem.amount}</p>
                    <p>{expenseItem.expenseType}</p>
                </Card.Text>
                <Card.Footer> 
                    <EditIcon onClick={() => {dispatch(UpdateAction(expenseItem)); dispatch(setModal(ModalTypes.UPDATE))}}> Edit </EditIcon>
                    <DeleteIcon onClick={()=> handleDelete(expenseItem.date)}> Delete </DeleteIcon>
                </Card.Footer> */}
            </Card.Body>
        </Card>
    )
} 
export default CardItem
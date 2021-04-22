import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {Button, Row, Col, Modal, Form, Card} from 'react-bootstrap'
import Menu from '../../Component/Menu'
import { addData, getData, deleteData } from '../../Action/expenseAction'
import './Expense.css';

const Expense = ()=> {
    const infoUser = useSelector(state => state.user);
    const infoExpense = useSelector(state => state.expense.expense);
    const dispatch = useDispatch();

    const [modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [choice, setChoice] = useState('')
    
    useEffect(() => {
        dispatch(getData(infoUser.userInfo.uid))
    }, [])
    
    const modalShow = (
        <Modal show={modal} onHide={() => setModal(false)} centered>
        <Modal.Header closeButton>
            <Modal.Title> Add New Expense </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>
                        Name of Expense 
                    </Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Amount of Expense 
                    </Form.Label>
                    <Form.Control 
                        onChange={(e) => setAmount(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Type of Expense 
                    </Form.Label>
                    <Form.Control as='select'
                        defaultValue = 'Spending'
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
                <Button variant='primary' onClick = {() => setModal(false)}> Close </Button> 
                <Button variant='primary' onClick = {() => handleAdd(name, amount, choice, new Date())}> Save </Button>
            </Modal.Footer>
        </Modal.Body>
        </Modal> 
    )

    const handleAdd = (nameExpense, amountExpense, choice, date) => {
        setModal(false)
        if (choice != 'Earning') {
            amountExpense = -amountExpense 
        } else {
            amountExpense = -amountExpense * -1
        }
        dispatch(addData(infoUser.userInfo.uid, nameExpense, amountExpense, choice, date))
    }

    const handleDelete = (date) => {
        dispatch(deleteData(infoUser.userInfo.uid, date))
    }

    const handleEdit = () => {

    }

    const [spending, setSpending] = useState(0)
    const [earning, setEarning] = useState(0)
    console.log(infoExpense)

    useEffect(() => {
        let earningAmount = 0
        let spendingAmount = 0
        infoExpense.map((id) => {
            if (id.expenseType === 'Earning') {
                earningAmount = earningAmount + id.amount
            } else {
                spendingAmount = spendingAmount + id.amount
            }
        })
        setEarning(earningAmount)
        setSpending(spendingAmount) 
    }, [infoExpense])
    
    return (
        <div>
            <Row> 
                <Col sm={3}>
                    <Menu/>
                </Col>
                <Col sm={9}>
                    <div>
                        <Row> 
                            <Col sm={4}>
                                <Row> 
                                    <Col>
                                        <div className='info'> 
                                            <h5> Total: {spending + earning}</h5>
                                            <p> Spending: {spending}</p>
                                            <p> Earning: {earning} </p>
                                        </div> 
                                    </Col>
                                </Row>
                                <Row> 
                                   <Button onClick={()=> setModal(true)}> Add New Expense </Button> 
                                   {modalShow}
                                </Row>    
                            </Col>
                            <Col sm={8} className='expenseList'> 
                                <h5> Expense List </h5>
                                <div className='deck'>
                                    
                                    {infoExpense.map((expenseItem)=> {
                                        const recent = new Date(expenseItem.date)
                                        return (
                                            <Card className='card'> 
                                                <Card.Body>
                                                    <Card.Header>
                                                        {recent.getMonth()}/{recent.getDate()}/{recent.getFullYear()}
                                                    </Card.Header>
                                                    <Card.Title> 
                                                        {expenseItem.name}
                                                    </Card.Title>
                                                    <Card.Text>
                                                        {expenseItem.amount}
                                                        {/* {expenseItem.expenseType} */}
                                                    </Card.Text>
                                                    {/* <Card.Footer> 
                                                        <Button onClick={()=> handleEdit()}> Edit </Button>
                                                        <Button onClick={()=> handleDelete(expenseItem.date)}> Delete </Button>
                                                    </Card.Footer> */}
                                                </Card.Body>
                                            </Card>
                                        )
                                    })}
        
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>            
        </div> 
    )
}
export default Expense

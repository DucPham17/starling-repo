import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {Button, Row, Col, Modal, Form, Card, Table} from 'react-bootstrap'
import { getData, deleteData, filterData } from '../../Action/expenseAction'
import './Expense.css';
import Lottie from 'react-lottie-player';
import animationData from '../../resources/Lotties/cat.json';
import { ModalTypes } from '../../Constant/modalTypes';
import {setModal} from '../../Action/modalsAction';
import CardItem from './CardItem'
import AddIcon from '@material-ui/icons/Add';

const Expense = ()=> {
    const filterDate = ['All', 'Today', '3 Recent Days', 'One Week']
    const filterType = ['All', 'Spending', 'Earning']
    
    const infoUser = useSelector(state => state.user);
    const infoExpense = useSelector(state => state.expense.expense);
    const infoUpdate = useSelector(state => state.update);
    const infoFilter = useSelector(state => state.filter);

    const [spending, setSpending] = useState(0)
    const [earning, setEarning] = useState(0)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterData(infoUser.userInfo.uid, infoFilter.date, infoFilter.type))
        dispatch(getData(infoUser.userInfo.uid)) 
    }, [infoExpense.expense])
    
    useEffect(() => {
        dispatch(filterData(infoUser.userInfo.uid, infoFilter.date, infoFilter.type))
        //dispatch(getData(infoUser.userInfo.uid))    
    }, [infoFilter.type, infoFilter.date])

    useEffect(() => {
        dispatch(filterData(infoUser.userInfo.uid, infoFilter.date, infoFilter.type))
        dispatch(getData(infoUser.userInfo.uid))   
    }, [spending, earning])

    useEffect(() => {
        let earningAmount = 0
        let spendingAmount = 0
        infoExpense.map((id) => {
            if (id.expenseType === 'Earning') {
                earningAmount = earningAmount + (-id.amount * -1)
            } else {
                spendingAmount = spendingAmount + (-id.amount * -1)
            }
        })
        setEarning(earningAmount)
        setSpending(spendingAmount) 
    }, [infoExpense])
    
    return (
        <div>
            <div>
                <Row> 
                    <Col>
                        <Card>
                            <Card.Body>
                                <h5> Total: {-spending + earning}</h5>
                                <p> Spending: {spending}</p>
                                <p> Earning: {earning} </p>
                            </Card.Body>
                        </Card>
                        {/* <div className='info'> 
                            <h5> Total: {-spending + earning}</h5>
                            <p> Spending: {spending}</p>
                            <p> Earning: {earning} </p>
                        </div>  */}
                    </Col>
                    <Col>
                        <p className='intro'>Filter by Date</p>
                        <Form.Control as='select' id='filter'
                            defaultValue = {infoFilter.date}
                            onChange={(e) => dispatch({
                                type: 'SETF',
                                key: 'date',
                                value: e.target.value,
                            })}>
                            {filterDate.map((id) => 
                                <option>
                                    {id}
                                </option>
                            )}
                        </Form.Control>    
                    </Col>
                    <Col>
                        <p className='intro'>Filter by Type</p>
                        <Form.Control as='select' id='filter'
                            defaultValue = {infoFilter.type}
                            onChange={(e) => dispatch({
                                type: 'SETF',
                                key: 'type',
                                value: e.target.value,
                            })}>
                            {filterType.map((id) => 
                                <option>
                                    {id}
                                </option>
                            )}
                        </Form.Control>
                    </Col>
                </Row>   
            </div>
            <div>
                <Card className='card'>
                    <Card.Header style={{fontSize:'25px'}}> 
                        Finance
                        <Button className='addButton' variant="outline-primary" onClick={() => dispatch(setModal(ModalTypes.EXPENSE))}
                            style={{float:'right'}}> 
                            <AddIcon/>Add New Expense 
                        </Button> 
                    </Card.Header>
                    <Card.Body>
                        <Table>
                            <thead>
                                <tr style={{padding:'1px', fontSize:'20px', margin:'1px'}}>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                                {infoFilter.filterList.length > 0 ?
                                    <tbody>
                                        {infoFilter.filterList.map((expenseItem) =>
                                            <CardItem item={expenseItem}/>
                                        )}
                                    </tbody>
                                        :
                                    <div>
                                        <Lottie
                                            animationData={animationData}
                                            loop
                                            play
                                            style={{ width: '30rem', height: '30rem' }}
                                        />
                                        <p style = {{fontSize:'20px', fontStyle:'bold', marginLeft:'2em'}}> Your Expense List is empty. Add New Expense to start </p>
                                     
                                    </div>    
                                    }
                            
                        </Table>
                    </Card.Body>
                </Card>  
            </div>
            
                <Row className='expenseList'>
                    
                </Row>
        
        </div>
    )
}
export default Expense

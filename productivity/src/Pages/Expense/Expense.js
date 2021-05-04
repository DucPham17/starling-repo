import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {Button, Row, Col, Modal, Form, Card} from 'react-bootstrap'
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
            <Row> 
                <Col sm={4}>
                    <Row> 
                        <Col>
                            <div className='info'> 
                                <h5> Total: {-spending + earning}</h5>
                                <p> Spending: {spending}</p>
                                <p> Earning: {earning} </p>
                            </div> 
                        </Col>
                    </Row>
                    <Row> 
                        <Col>
                            <Button className='addButton' variant="outline-primary" onClick={() => dispatch(setModal(ModalTypes.EXPENSE))}> 
                                <AddIcon/>Add New Expense 
                            </Button> 
                            
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
                </Col>
                <Col sm={8} className='expenseList'> 
                    <h5> Expense List </h5>
                    <div className='deck'>
                        {infoFilter.filterList.length > 0 ?
                         infoFilter.filterList.map((expenseItem)=> 
                            <CardItem item={expenseItem}/>
                        ) :
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
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Expense

import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import {Button, Row, Col, Form, Card, Table} from 'react-bootstrap'
import { getData, filterData } from '../../Action/expenseAction'
import './Expense.css';
import Lottie from 'react-lottie-player';
import animationData from '../../resources/Lotties/cat.json';
import { ModalTypes } from '../../Constant/modalTypes';
import {setModal} from '../../Action/modalsAction';
import CardItem from './CardItem'
import AddIcon from '@material-ui/icons/Add';
import { Money } from "../Dashboard/ExpenseModule/Money";

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
            <Row style={{margin:'1em'}}>
                <Col sm={3}> 
                    <Card>
                        <Card.Header style={{fontSize:'25px', fontWeight:'bold'}}>
                            Expense Information
                        </Card.Header>
                        <Card.Body>
                            <Money label={'Earning'} amount={earning}/>
                            <Money label={'Spending'} amount={spending}/>
                            <div className='divider p-0 my-2'/>
                            <Money
                                variant={earning - spending < 0 ? 'negative' : 'positive'}
                                label={'Total'}
                                amount={earning - spending}
                            />
                        </Card.Body>
                    </Card>
                    <Card> 
                        <Card.Body>
                            <p className='intro'>Filter by Date</p>
                            <Form.Control as='select' id='filter1'
                                value = {infoFilter.date}
                                defaultValue = {filterDate[0]}
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
                            <Form.Control as='select' id='filter2'
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
                        </Card.Body>
                    </Card>
                    {/* <p className='intro'>Filter by Date</p>
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
                    </Form.Control> */}
                </Col>
                <Col sm={9}> 
                    <Card className='card'>
                        <Card.Header style={{fontSize:'25px', backgroundColor:'#fcf4a3', fontWeight:'bold'}}> 
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
                </Col>
            </Row>
        </div>
    )
}
export default Expense

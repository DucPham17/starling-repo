import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Row, Col, Form, Card, Table} from 'react-bootstrap'
import { getData, filterData } from '../../Action/expenseAction'
import './Expense.css';
import { ModalTypes } from '../../Constant/modalTypes';
import {setModal} from '../../Action/modalsAction';
import CardItem from './CardItem'
import AddIcon from '@material-ui/icons/Add';
import { Money } from "../Dashboard/ExpenseModule/Money";
import { CommonButton } from '../../Component/Common/CommonButton';

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
                        <Card.Body>
                            <h4>
                                Information
                            </h4>
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
                            <div className='intro'>Filter by Date</div>
                            <Form.Control as='select' id='filter1'
                                className="mb-3"
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
                            <div className='intro'>Filter by Type</div>
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
                </Col>
                <Col sm={9}> 
                    <Card className='card'>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-3">
                                <h4>Finance</h4>
                                <CommonButton className='addButton' variant="primary" onClick={() => dispatch(setModal(ModalTypes.EXPENSE))}
                                    style={{float:'right'}}> 
                                    <AddIcon/>Add New Expense 
                                </CommonButton> 
                            </div>
                            <Table>
                                <thead>
                                    <tr
                                        className="table-row"
                                    >
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Type</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                    
                                        <tbody>
                                            {infoFilter.filterList.length > 0 ? infoFilter.filterList.map((expenseItem) =>
                                                <CardItem item={expenseItem}/>
                                            ) : (<tr>
                                                    <td align="center" colspan="6">
                                                        <p style = {{fontSize:'20px', fontStyle:'bold', marginLeft:'2em'}}> Your Expense List is empty. Add New Expense to start </p>
                                                    </td>
                                                </tr>
                                                 
                                            )}
                                        </tbody>
                            </Table>
                        </Card.Body>
                    </Card>  
                </Col>
            </Row>
        </div>
    )
}
export default Expense

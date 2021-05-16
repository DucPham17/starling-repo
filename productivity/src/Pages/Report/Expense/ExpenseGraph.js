import React, {useState, useEffect} from 'react'
import {Row, Col, Form, Card} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
import './Expense.css';
import { filterData } from '../../../Action/expenseAction'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import ExpenseInfo from './ExpenseInfo'

//Graph making tutorial
//https://www.freakyjolly.com/react-charts-examples/
const periods = [
    '3 Recent Days',
    'One Week' 
];

const ExpenseGraph = (props) => {    
    const infoUser = useSelector(state => state.user);
    const infoExpense = useSelector(state => state.expense.expense);
    const infoFilter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const [spending, setSpending] = useState(0);
    const [earning, setEarning] = useState(0);
    const [period, setPeriod] = useState('3 Recent Days');

    const COLORS = ['#0088FE', '#00C49F', '#ffafcc', '#560bad', '#ff6b6b', '#f9c74f']
    COLORS.sort(() => Math.random()-0.5)
    const getList = (earning, spending) => {
        const sumEarningSpending = earning + spending;
        return [
            {
                name: 'Earning',
                value: Math.round((earning*100)/sumEarningSpending)
            },
            {
                name: 'Spending',
                value: Math.round((spending*100)/sumEarningSpending)
            }
        ];
    }
    
    useEffect(() => { 
        dispatch(filterData(infoUser.userInfo.uid, period, 'All'))
    }, [period])

    useEffect(() => {
        let earningAmount = 0
        let spendingAmount = 0
        if (infoFilter.filterList.length > 0) {
            infoFilter.filterList.map((id) => {
                if (id.expenseType === 'Earning') {
                    earningAmount = earningAmount + (-id.amount * -1)
                } else {
                    spendingAmount = spendingAmount + (-id.amount * -1)
                }
            })
            setEarning(earningAmount)
            setSpending(spendingAmount) 
        }
    }, [infoFilter])

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }
        return null;
    };

    const list = getList(earning, spending)

    return (
        <Row>
            <Col md={12} className="d-flex">
                <Form.Control as='select' required
                    defaultValue = 'Pick one...'
                    onChange={(e) => setPeriod(e.target.value)}
                >
                        {
                            periods.map((value) => (
                                <option>
                                    {value}
                                </option>
                            ))
                        }
                </Form.Control>
            </Col>
            <Col md={12} xl={3}> 
                <ExpenseInfo period={period}/> 
            </Col>
                <Col md={12} xl={9}>
                <Card className="mx-0">
                    <Card.Body>
                        {infoFilter.filterList.length > 0 ?
                            <>
                                <h4>Charting Earnings vs Spendings</h4>
                                <div className="d-flex justify-content-center">
                                    <PieChart width={700} height={500}>
                                        <Pie data={list} color="#03071e" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={200} fill="#8884d8" >
                                            {
                                                list.map((entry, index) => 
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                            
                                            }
                                        </Pie>
                                        <Tooltip content={<CustomTooltip/>} />
                                        <Legend />
                                    </PieChart>  
                                </div>
                            </> :
                            <>
                                <h5> 
                                    You have not made any expense {period.toLowerCase()}
                                </h5>
                                <p> 
                                    Add new expense to see the data
                                </p>
                            </>
                        }
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ExpenseGraph

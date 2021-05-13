import React, {useState, useEffect} from 'react'
import {Nav, Tabs, Tab, Row, Col} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
import './Expense.css';
import { getData, deleteData, filterData } from '../../../Action/expenseAction'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import ExpenseInfo from './ExpenseInfo'
import { useParams } from "react-router-dom";

//Graph making
//https://www.freakyjolly.com/react-charts-examples/

const ExpenseGraph = (props) => {
    let {id} = useParams()
    if (id == 'OneWeek'){
        id = 'One Week'  
    } else {
        id = '3 Recent Days'
    }
    
    const infoUser = useSelector(state => state.user);
    const infoExpense = useSelector(state => state.expense.expense);
    const infoFilter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const [spending, setSpending] = useState(0)
    const [earning, setEarning] = useState(0)

    const COLORS = ['#0088FE', '#00C49F', '#ffafcc', '#560bad', '#ff6b6b', '#f9c74f']
    COLORS.sort(() => Math.random()-0.5)
    const getList = (earning, spending) => {
        const sumEarningSpending = earning + spending;
        return [
            {
                name: 'Earning Amount',
                value: Math.round((earning*100)/sumEarningSpending)
            },
            {
                name: 'Spending Amount',
                value: Math.round((spending*100)/sumEarningSpending)
            }
        ];
    }
    
    useEffect(async() => { 
        await dispatch(filterData(infoUser.userInfo.uid, id, 'All'))
    }, [id])

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
    })

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
    console.log(list)

    return (
        <div>
            <Row>
                <Col>
                    <ExpenseInfo/> 
                </Col>
                <Col>
                    {infoFilter.filterList.length > 0 ?
                        <div className='graphBox'>
                            <h5> Charting Earnings vs Spendings</h5>
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
                        
                        :
                        <div className='graphBox'>
                            <h5> 
                                You have not made any expense {id.toLowerCase()}
                            </h5>
                            <p> 
                                Add new expense to see the data
                            </p>
                        </div>     
                    }
                </Col>
            </Row> 
        </div> 
    )
}

export default ExpenseGraph

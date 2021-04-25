import React, { useState, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { signout } from '../../Action/userAction';
import Menu from '../../Component/Menu'
import './Dashboard.css';
import { addData, getData } from '../../Action/expenseAction'

// import {db} from "./firebase";

const Dashboard= (props)=> {
    const info = useSelector(state => state.user);
    const infoExpense = useSelector(state => state.expense.expense);
    const {todos, selectedDate} = useSelector((state) => state.todos);

    const {loading, userInfo , error} = info;
    const dispatch = useDispatch();
    const today = new Date();
    const [hello, setHello] = useState('Hello')

    
    useEffect(()=>{
        if(!userInfo){
            props.history.push("/signin");
        }
    })

    useEffect(() => {
        dispatch(getData(userInfo.uid))
        if (today.getHours() < 12) {
            setHello('Good Morning')
        } else if (today.getHours() > 12 && today.getHours() < 18) {
            setHello('Good Afternoon')
        } else {
            setHello('Good Evening')
        }
    }, [])

    const [spending, setSpending] = useState(0)
    const [earning, setEarning] = useState(0)
    
    useEffect(() => {
        let earningAmount = 0
        let spendingAmount = 0
        infoExpense.map((id) => {
            if (id.expenseType === 'Earning') {
                earningAmount = earningAmount + (-id.amount* -1)
            } else {
                spendingAmount = spendingAmount + (-id.amount* -1)
            }
        })
        setEarning(earningAmount)
        setSpending(spendingAmount) 
    }, [infoExpense])
    

    const handleSignout = () =>{
        dispatch(signout());
    }

    
    
    return (
        <div className='dashboard'>
            <Row> 
                <Col sm={4}> 
                    <div className='introduction'>
                        <p>
                            {hello}
                        </p>
                        <p>
                            Today is {today.getMonth()}/{today.getDate()}/{today.getFullYear()}
                        </p>
                    </div>
                    <div className='expense'>
                        <h5>
                            Expense Info: 
                        </h5>
                        <p>
                            Total: {-spending + earning}
                        </p>
                        <p>
                            Spending: {spending}
                        </p>
                        <p>
                            Earning: {earning}
                        </p>
                    </div>
                </Col>
                <Col sm={8}> 
                    <div className='todayList'>
                        <h5>Today List:</h5>
                    </div>
                </Col>
            </Row>          
        </div> 
    )
}
export default Dashboard
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import './Expense.css';
import {Card} from 'react-bootstrap'
import { getData, deleteData, filterData } from '../../../Action/expenseAction'
import { useParams } from "react-router-dom";

const ExpenseInfo = (props) => {
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
    const [spendingNumber, setSpendingNumber] = useState(0)
    const [earningNumber, setEarningNumber] = useState(0)

    useEffect(async() => {
        await dispatch(filterData(infoUser.userInfo.uid, id, 'All'))
    }, [])

    useEffect(() => {
        let earningAmount = 0
        let spendingAmount = 0
        let spendingCount = 0
        let earningCount = 0

        if (infoFilter.filterList.length > 0) {
            infoFilter.filterList.map((id) => {
                if (id.expenseType === 'Earning') {
                    earningAmount = earningAmount + (-id.amount * -1)
                    earningCount = earningCount + 1
                } else {
                    spendingAmount = spendingAmount + (-id.amount * -1)
                    spendingCount = spendingCount + 1
                }
                
            })
            setEarning(earningAmount)
            setSpending(spendingAmount) 
            setSpendingNumber(spendingCount)
            setEarningNumber(earningCount)
        }
    })

    return (
        <div >
            <Card>
                <Card.Header>
                    {id} Info
                </Card.Header>
                <Card.Body>
                    <p> Balance: {spending + earning}</p>
                    <p> Spending Amount: {spending} </p>
                    <p> Earning Amount: {earning} </p>
                    <p> Total transactions: {spendingNumber + earningNumber} </p>
                    <p> Number of Spending made: {spendingNumber} </p>
                    <p> Number of Earning made: {earningNumber} </p>
                </Card.Body>
            </Card>
            {/* <h5 className='intro'>
                {id} Info
            </h5>
            <div className='infoBox'>
                <p> Balance: {spending + earning}</p>
                <p> Spending Amount: {spending} </p>
                <p> Earning Amount: {earning} </p>
                <p> Total transactions: {spendingNumber + earningNumber} </p>
                <p> Number of Spending made: {spendingNumber} </p>
                <p> Number of Earning made: {earningNumber} </p>
            </div> */}
            
        </div>
    )
}

export default ExpenseInfo
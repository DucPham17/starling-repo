import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import './Expense.css';
import {Card} from 'react-bootstrap'
import { filterData } from '../../../Action/expenseAction'

const ExpenseInfo = (props) => {
    const infoUser = useSelector(state => state.user);
    const infoExpense = useSelector(state => state.expense.expense);
    const infoFilter = useSelector(state => state.filter);

    const [spending, setSpending] = useState(0)
    const [earning, setEarning] = useState(0)
    const [spendingNumber, setSpendingNumber] = useState(0)
    const [earningNumber, setEarningNumber] = useState(0)


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
    }, [infoFilter]);

    return (
        <Card className="mx-0">
            <Card.Body>
                <h4>{props.period} Info</h4>
                <div className="divider"/>
                <p> Balance: {spending + earning}</p>
                <p> Spending Amount: {spending} </p>
                <p> Earning Amount: {earning} </p>
                <p> Total transactions: {spendingNumber + earningNumber} </p>
                <p> Number of Spending made: {spendingNumber} </p>
                <p> Number of Earning made: {earningNumber} </p>
            </Card.Body>
        </Card>
    )
}

export default ExpenseInfo
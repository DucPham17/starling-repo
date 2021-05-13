import {Card} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import '../Report.css';
import { useParams } from "react-router-dom";

const ToDoInfo = (props) => {
    let {id} = useParams()
    if (id == 'OneWeek'){
        id = 'One Week'  
    } else if (id == 'ComingSoon') {
        id = 'Coming Soon' 
    } else {
        id = '3 Recent Days'
    }

    const [completed, setCompleted] = useState(0)
    const [uncompleted, setUncompleted] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(()=> {
        let completedAmount = 0
        let uncompletedAmount = 0
        let counting = 0 

        if (props.todos.length > 0) {
            props.todos.map((id) => {
                if (id.isCompleted === false) {
                    completedAmount = completedAmount + 1
                } else {
                    uncompletedAmount = uncompletedAmount + 1
                }
                counting = counting + 1       
        })
        setCompleted(completedAmount)
        setUncompleted(uncompletedAmount)
        setCount(counting) 
        }
    })

    return (
        <div>
            <Card style={{margin:'2em'}}>
                <Card.Header className='introG'>
                    {id} Info
                </Card.Header>
                <Card.Body>
                    <p>Total Amount of Tasks: {count}</p>
                    <p>Amount of Completed tasks: {completed}</p>
                    <p>Amount of In Progress tasks: {uncompleted}</p>
                </Card.Body>
            </Card>
        </div> 
    )
}

export default ToDoInfo
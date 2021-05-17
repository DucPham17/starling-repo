import {Card} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import '../Report.css';

const ToDoInfo = (props) => {


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
        <Card className="mx-0">
            <Card.Body>
                <h4>{props.period} Info</h4>
                <div className="divider"/>
                <p>Total Tasks: {count}</p>
                <p>Completed tasks: {completed}</p>
                <p>In Progress tasks: {uncompleted}</p>
            </Card.Body>
        </Card>
    )
}

export default ToDoInfo
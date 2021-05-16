import React, {useState, useEffect} from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import { PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';


//Graph making tutorial
//https://www.freakyjolly.com/react-charts-examples/

const Completion = (props) => {
    const [completed, setCompleted] = useState(0)
    const [uncompleted, setUncompleted] = useState(0)
    
    useEffect(()=> {
        let completedAmount = 0
        let uncompletedAmount = 0

        if (props.todos.length > 0) {
            props.todos.map((id) => {
                if (id.isCompleted === false) {
                    uncompletedAmount = uncompletedAmount + 1
                } else {
                    completedAmount = completedAmount + 1
                }      
        })
        setCompleted(completedAmount)
        setUncompleted(uncompletedAmount) 
        }
    })

    const COLORS = ['#0088FE', '#00C49F', '#ffafcc', '#560bad', '#ff6b6b', '#f9c74f']
    COLORS.sort(() => Math.random()-0.5)

    const getList = (completed, uncompleted) => {
        const sum = completed + uncompleted;
        return [
            {
                name: 'Completed Tasks',
                value: Math.round((completed*100)/sum)
            },
            {
                name: 'In Progress Tasks',
                value: Math.round((uncompleted*100)/sum)
            }
        ];
    }
    
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

    const list = getList(completed, uncompleted)

    return (
        <Card className="mx-0">
            <Card.Body>
                <h4> Graph of Completed and In Progress Tasks </h4>
                <div className="d-flex justify-content-center">
                    <PieChart width={500} height={500}>
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
            </Card.Body>
        </Card>
    )
}

export default Completion

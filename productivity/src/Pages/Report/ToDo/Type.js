import React, {useState, useEffect} from 'react'
import {Nav, Tabs, Tab, Row, Col} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useParams } from "react-router-dom";
import {filterTodosByDate } from '../../../Action/todosAction';

//Graph making
//https://www.freakyjolly.com/react-charts-examples/

const Type = (props) => {
    const [work, setWork] = useState(0)
    const [errand, setErrand] = useState(0)
    const [shopping, setShopping] = useState(0)
    const [personal, setPersonal] = useState(0)
    
    useEffect(()=> {
        let workAmount = 0
        let errandAmount = 0
        let shoppingAmount = 0
        let personalAmount = 0

        if (props.todos.length > 0) {
            props.todos.map((id) => {
                if (id.tag === 'Work') {
                    workAmount = workAmount + 1
                } else if (id.tag === 'Errands') {
                    errandAmount = errandAmount + 1
                } else if (id.tag === 'Shopping') {
                    shoppingAmount = shoppingAmount + 1
                } else {
                    personalAmount = personalAmount + 1
                }    
        })
        setWork(workAmount)
        setErrand(errandAmount) 
        setShopping(shoppingAmount)
        setPersonal(personalAmount)
        }
    })

    const COLORS = ['#0088FE', '#00C49F', '#ffafcc', '#560bad', '#ff6b6b', '#f9c74f']
    COLORS.sort(() => Math.random()-0.5)
    
    const getList = (work, errand, shopping, personal) => {
        const sum = work + shopping + errand + personal;
        return [
            {
                name: 'Work',
                value: Math.round((work*100)/sum)
            },
            {
                name: 'Errands',
                value: Math.round((errand*100)/sum)
            },
            {
                name: 'Shopping',
                value: Math.round((shopping*100)/sum)
            }, 
            {
                name: 'Personal',
                value: Math.round((personal*100)/sum)
            }, 
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

    const list = getList(work, errand, shopping, personal)

    return (
        <div>
            <Row>
                <Col> 
                    <h5> Graph of Tags </h5>
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
                </Col>
            </Row>
            
        </div> 
    )
}

export default Type

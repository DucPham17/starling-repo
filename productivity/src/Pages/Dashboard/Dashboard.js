import React, { useState, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { signout } from '../../Action/userAction';
import Menu from '../../Component/Menu'
import './Dashboard.css';

// import {db} from "./firebase";

const Dashboard= (props)=> {
    const info = useSelector(state => state.user);
    const {loading, userInfo , error} = info;
    const dispatch = useDispatch();
    console.log(userInfo);
    
    const [todos, setTodos] = useState([]);
    
    useEffect(()=>{
        if(!userInfo){
            props.history.push("/signin");
        }
    })

    
    return (
        <div className='dashboard'>
            <Row> 
                <Col sm={4}> 
                    <div className='introduction'>
                        <p>
                            Hello ... 
                        </p>
                        <p>
                            Today is ...
                        </p>
                    </div>
                    <div className='calendar'>
                        <p>
                            Expense List 
                        </p>
                    </div>
                </Col>
                <Col sm={8}> 
                    <div className='todayList'>
                        <h5>Today:</h5>
                            
                        

                            
                    </div>
                </Col> 
            </Row>
        </div> 
    )
}
export default Dashboard
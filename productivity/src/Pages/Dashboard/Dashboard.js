import React, { useEffect} from 'react';
import {Col, Row} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import './Dashboard.css';
import { setupDashboard } from '../../Action/dashboardAction';
import { WelcomeModule } from './WelcomeModule';
import { ExpenseModule } from './ExpenseModule';
import { TodosModule } from './TodosModule';

const Dashboard= (props)=> {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setupDashboard())
    }, [])
    
    return (
        <div className='w-100 v-100 p-5'>
            <h1>Today at a Glance</h1>
            <Row> 
                <Col sm={12}>
                    <WelcomeModule/>
                </Col>
                <Col sm={3}> 
                    <ExpenseModule/>
                </Col>
                <Col sm={9}> 
                    <TodosModule/>
                </Col>
            </Row>          
        </div> 
    )
}
export default Dashboard
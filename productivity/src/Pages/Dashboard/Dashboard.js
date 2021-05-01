import React, { useState, useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { signout } from '../../Action/userAction';
import './Dashboard.css';
import { setupDashboard } from '../../Action/dashboardAction';
import { WelcomeModule } from './WelcomeModule';
import { ExpenseModule } from './ExpenseModule';

const Dashboard= (props)=> {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setupDashboard())
    }, [])
    
    return (
        <div fluid className='w-100 v-100 p-5'>
            <h1>Today at a Glance</h1>
            <Row> 
                <Col sm={12}>
                    <WelcomeModule/>
                </Col>
                <Col sm={3}> 
                    <ExpenseModule/>
                </Col>
                <Col sm={9}> 
                    <div className='todayList'>
                        <h5>Today List:</h5>
                    </div>
                </Col>
            </Row>          
        </div> 
    )
}
export default Dashboard
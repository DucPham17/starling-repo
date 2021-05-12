import React, { useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap'
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
        <div className='w-100 v-100'>
            <Container fluid className='p-0'>
                <Row> 
                    <Col sm={12}>
                        <WelcomeModule/>
                    </Col>
                    <Col md={12} lg={6} xl={6}> 
                        <TodosModule/>
                    </Col>
                    <Col md={12} lg={6} xl={6}> 
                        <ExpenseModule/>
                    </Col>
                </Row> 
            </Container>         
        </div> 
    )
}
export default Dashboard
import React, { useState, useEffect} from 'react';
import {Col, Card, Row, Form} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { signout } from '../../Action/userAction';
import Menu from '../../Component/Menu'
import './Dashboard.css';

const Dashboard= (props)=> {
    const todayList = {}
    const info = useSelector(state => state.user);
    const {loading, userInfo ,error} = info;
    const dispatch = useDispatch();
    console.log(userInfo);
    
    useEffect(()=>{
        if(!userInfo){
            props.history.push("/signin");
        }
    })

    const handleSignout = () =>{
        dispatch(signout());
    }

    return (
        <div className='dashboard'>
            <Row> 
                <Col sm={3}>
                    <Menu/>
                </Col>
                <Col sm={9}>
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
                                <h5> List of things needed to do today </h5>
                                <div className='cardBox'>
                                    <Card className='cardStyle'> 
                                        <Card.Title> 
                                            Homework
                                        </Card.Title>
                                        <Row> 
                                            <Col> 
                                                <Card.Text> 
                                                    Math
                                                </Card.Text>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="" />
                                                </Form.Group>
                                            </Col>
                                        </Row>    
                                    </Card>
                                    <Card className='cardStyle'> 
                                        <Card.Title> 
                                            Homework
                                        </Card.Title>
                                        <Row> 
                                            <Col> 
                                                <Card.Text> 
                                                    Geography
                                                </Card.Text>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="" />
                                                </Form.Group>
                                            </Col>
                                        </Row>    
                                    </Card>
                                    
                                </div>
                            </div>
                        </Col> 
                    </Row>
                    <button onClick={handleSignout}>Sign out</button>
                </Col>
            </Row> 
        </div> 
    )
}
export default Dashboard
import React from 'react';
import {Col, Card, Row, Form} from 'react-bootstrap'
import './Dashboard.css';
const Dashboard= ()=> {
    const todayList = {}

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
                            Calendar
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
        </div> 
    )
}
export default Dashboard
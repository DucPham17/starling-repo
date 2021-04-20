import { ReportOffSharp } from '@material-ui/icons';
import React from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import Menu from '../../Component/Menu'
const Expense = ()=> {
    const handleClick = ()=> {

    }
    
    return (
        <div>
            <Row> 
                <Col sm={3}>
                    <Menu/>
                </Col>
                <Col sm={9}>
                    <div>
                        <Row> 
                            <Col sm={4}>
                                <Row> 
                                    <Col> 
                                        <h5> Total Amount: </h5>
                                        <p> Spending: </p>
                                        <p> Saving: </p>
                                    </Col>
                                </Row>
                                <Row> 
                                   <Button onClick={()=> handleClick()}> Add New Expense </Button> 
                                </Row>    
                            </Col>
                            <Col sm={8}> 
                                <h5> Expense List </h5>
                                <div>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>            
        </div> 
    )
}
export default Expense
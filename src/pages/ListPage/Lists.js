import React from 'react';
import {Row, Col} from 'react-bootstrap'
import Menu from '../../component/Menu'
const Lists= () => {
    return (
        <div>
            <Row> 
                <Col sm={3}>
                    <Menu/>
                </Col>
                <Col sm={9}>
                    <div>
                        
                    </div>
                </Col>
            </Row>            
        </div>  
    )
}
export default Lists
import React from 'react'
import './Report.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CommonButton } from '../../Component/Common/CommonButton';
import ExpenseGraph from './Expense/ExpenseGraph';
import ToDoGraph from './ToDo/ToDoGraph';
import { Col, Container, Row } from 'react-bootstrap';

const routes = [
    {
        href: '/report/expense/3recentdays',
        label: 'Expense'
    },
    {
        href: '/report/todo/3recentdays',
        label: 'Todos'
    }
]

const Report = () => {
    const history = useHistory();
    const location = useLocation();

    return (
        <div className='w-100 v-100'>
            <Container fluid className='px-5'>
                <Row>
                    <Col md={12}>
                        {
                            routes.map((route) => (
                                <CommonButton
                                    className="mx-1"
                                    key={route.href}
                                    variant={location.pathname.startsWith(route.href) ? 'primary' : 'secondary'}
                                    onClick={() => history.push(route.href)}
                                >
                                    {route.label}
                                </CommonButton>
                            ))
                        }
                    </Col>
                </Row>
                <div className="divider"/>
                <Switch>
                    <Route path="/report/expense" component={ExpenseGraph}/>
                    <Route path="/report/todo" component={ToDoGraph}/>
                </Switch>
            </Container>
        </div>
    )
}
export default Report
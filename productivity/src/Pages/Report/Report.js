import React from 'react'
import './Report.css';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CommonButton } from '../../Component/Common/CommonButton';
import ExpenseGraph from './Expense/ExpenseGraph';
import ToDoGraph from './ToDo/ToDoGraph';

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
        <div>
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
            <div className="divider"/>
            <Switch>
                <Route path="/report/expense" component={ExpenseGraph}/>
                <Route path="/report/todo" component={ToDoGraph}/>
            </Switch>
        </div> 
    )
}
export default Report
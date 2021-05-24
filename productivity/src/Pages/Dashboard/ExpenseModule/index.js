import {  Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getEarningAndSpendingAmount } from '../../../Helpers/expense';
import { Money } from "./Money";
import { LinkButton } from '../../../Component/Common/LinkButton';

export const ExpenseModule = () => {
    const {expenses} = useSelector((state) => state.dashboard);
    const history = useHistory();

    const {
        earning,
        spending
    } = getEarningAndSpendingAmount(expenses);

    return (
        <Card className="h-100">
            <Card.Body className="h-100">
                <h4>Expense</h4>
                <div className="d-flex flex-column align-items-end">
                    <Money label={'Earning'} amount={earning}/>
                    <Money label={'Spending'} amount={spending}/>
                    <div className='divider p-0 my-2'/>
                    <Money
                        variant={earning - spending < 0 ? 'negative' : 'positive'}
                        label={'Total'}
                        amount={earning - spending}
                    />
                </div>
            </Card.Body>
            <div className="divider"/>
            <Card.Body className="d-flex justify-content-center"> 
                <LinkButton style={{maxHeight: '50px'}} onClick={() => history.push('/expense')}>View all</LinkButton>
            </Card.Body>
        </Card>
    )
}
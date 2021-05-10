import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getEarningAndSpendingAmount } from '../../../Helpers/expense';
import { Money } from "./Money";

export const ExpenseModule = () => {
    const {expenses} = useSelector((state) => state.dashboard);
    const history = useHistory();

    const {
        earning,
        spending
    } = getEarningAndSpendingAmount(expenses);

    return (
        <Card>
            <Card.Header as="h5">Today's Expense</Card.Header>
            <Card.Body className="d-flex flex-column align-items-end">
                <Money label={'Earning'} amount={earning}/>
                <Money label={'Spending'} amount={spending}/>
                <div className='divider p-0 my-2'/>
                <Money
                    variant={earning - spending < 0 ? 'negative' : 'positive'}
                    label={'Total'}
                    amount={earning - spending}
                />
            </Card.Body>
            <Card.Footer> 
                <Button onClick={() => history.push('/expense')}>More details</Button>
            </Card.Footer>
        </Card>
    )
}
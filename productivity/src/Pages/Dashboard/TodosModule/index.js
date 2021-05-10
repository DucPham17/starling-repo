import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { NoteCard } from "../../Notes/Content/NoteCard";

export const TodosModule = () => {
    const {todos} = useSelector((state) => state.dashboard);
    const history = useHistory();

    return (
        <Card>
            <Card.Header as="h5">Today's Todo List</Card.Header>
            <Card.Body>
                <NoteCard todos={todos}/>
            </Card.Body>
            <Card.Footer> 
                <Button onClick={() => history.push('/notes')}>More details</Button>
            </Card.Footer>
        </Card>
    );
}
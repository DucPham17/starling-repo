import { Badge, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { LinkButton } from "../../../Component/Common/LinkButton";
import { NoteCard } from "../../Notes/Content/NoteCard";

export const TodosModule = () => {
    const {todos} = useSelector((state) => state.dashboard);
    const history = useHistory();

    return (
        <Card>
            <Card.Body>
                <div className="d-flex flex-row justify-content-between">
                    <h2>To-do list</h2>
                    <div>
                        <Badge pill className="bg-warning">
                            Due today
                        </Badge>
                    </div>
                </div>
                <NoteCard todos={todos}/>
            </Card.Body>
            <div className="divider"/>
            <Card.Body className="d-flex justify-content-center"> 
                <LinkButton onClick={() => history.push('/notes')}>View all</LinkButton>
            </Card.Body>
        </Card>
    );
}
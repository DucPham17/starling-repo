import { Badge, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { LinkButton } from "../../../Component/Common/LinkButton";
import { NoteCard } from "../../Notes/Content/NoteCard";

export const TodosModule = () => {
    const {todos} = useSelector((state) => state.dashboard);
    const history = useHistory();

    return (
        <Card className="h-100">
            <Card.Body className="h-100">
                <div className="d-flex flex-row justify-content-between">
                    <h4>To-do list</h4>
                    <div>
                        <Badge 
                            style={{ fontSize: '1.1rem' }}
                            pill
                            className="bg-warning"
                        >
                            Due today
                        </Badge>
                    </div>
                </div>
                <NoteCard todos={todos}/>
            </Card.Body>
            <div className="divider"/>
            <Card.Body className="d-flex justify-content-center"> 
                <LinkButton onClick={() => history.push('/notes/all')}>View all</LinkButton>
            </Card.Body>
        </Card>
    );
}
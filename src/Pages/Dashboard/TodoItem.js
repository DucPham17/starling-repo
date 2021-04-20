import React, { useState}  from 'react';
import classNames from 'classnames';
import {Form, Button, ListGroup, Row, Col, Modal} from 'react-bootstrap';
import {AiOutlineCheckCircle} from 'react-icons';

function TodoItem({todo, toggleComplete, editTodo, updateTodo, removeTodo, closeEditView}){
    

    const [showModal, setShow] = useState(false);
    const handleClose = () => 
      setShow(false);
    

    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }

    function removeText(){
        removeTodo(todo.id);
    }

    function editText() {
        setShow(true);
        editTodo(todo.id);
    }

    function updateTitle(event) {
        const value = event.target.value;
        updateTodo(todo.id, value);
    }

    function onKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            setShow(false);
            closeEditView();
          }
    } 

    return (
        <div className={
            classNames({ 
                completed: todo.isCompleted, 
                editing: todo.isEditing 
            })}>
            <div className="view">
                <ListGroup.Item>
                <Form inline>
                <Form.Check 
                        className="completed"
                        onClick={handleCheckboxClick}
                />
                {/* <AiOutlineCheckCircle /> */}
                <ListGroup.Item style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} onClick={editText}>
                {todo.title}
                </ListGroup.Item>
                </Form>

                <Modal show={showModal} onHide={handleClose}>
                <Modal.Body>
                <Form.Control  
                        className="edit"
                        value={todo.title} 
                        onChange={updateTitle} 
                        onKeyDown={onKeyDown}
                 /> 
                <Modal.Footer> 
                    <Button variant="secondary" onClick={removeText}>Delete</Button>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                </Modal.Footer> 
                </Modal.Body>
                
                </Modal>
                </ListGroup.Item>
            </div>
           
        </div>)

}

export default TodoItem;
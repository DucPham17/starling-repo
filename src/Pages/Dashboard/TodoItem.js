import React from 'react';
import classNames from 'classnames';
import {Form, Button, ListGroup, Row, Col} from 'react-bootstrap';


function TodoItem({todo, toggleComplete, editTodo, updateTodo, removeTodo, closeEditView}){
    
    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }

    function removeText(){
        removeTodo(todo.id);
    }

    function editText() {
        editTodo(todo.id);
    }

    function updateTitle(event) {
        const value = event.target.value;
        updateTodo(todo.id, value);
    }

    function onKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
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
                <ListGroup>
                <ListGroup.Item primary={todo} secondary="In Progress">
                <Form inline>
                <Form.Check type="checkbox" 
                        checked={todo.isCompleted}
                        onClick={handleCheckboxClick}
                />
                <Form.Control  
                        value={todo.title} 
                        onChange={updateTitle} 
                        onKeyDown={onKeyDown}
                         /> 
                <Button onClick={removeText}>x</Button>
     
                </Form>
                  
                </ListGroup.Item>
                </ListGroup>
            </div>
           
        </div>)

}

export default TodoItem;
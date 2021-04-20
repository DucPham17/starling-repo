import React, { useState} from 'react';
import {Col, Card, Row, Form,  Button, Modal} from 'react-bootstrap'
import uuid from 'react-uuid';

const TodoForm = ({addTodo}) => {

    const [showModal, setShow] = useState(false);

    
    const handleClose = () => 
      setShow(false);

    const[todos, setTodos] = useState({
        id: "",
        title: "",
        isCompleted: false,
        isEditing: false,
    });

    function handleNewTodo(e) {
        setShow(true);
        setTodos({...todos, title: e.target.value});
    }

    function handleSubmit(e){
        if (e.key === 'Enter') {
          e.preventDefault();
          setShow(false);
          if(todos.title.trim()) {
            addTodo({...todos, id: uuid()})
            setTodos({
              id: '',
              title: '',
              isCompleted: false,
              isEditing: false,
            })
          }
        }
      }
   
    return (
        <div>
             <Form.Group>
                                <Row>
                                  <Button type="submit" onClick={handleNewTodo}>
                                    <span class="icon_add" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                    </span>
                                    Add task
                                  </Button>
                                  <Modal show={showModal} onHide={handleClose}>
              
                                  <Modal.Body>
                                  <Form.Control 
                                    placeholder="Add task" 
                                    value={todos.title}
                                    onChange={handleNewTodo}
                                    onKeyDown={handleSubmit}
                                />
                                  </Modal.Body> 
                                  <Modal.Footer> 
                                  <Button variant="secondary" onClick={handleClose}> 
                                    Cancel
                                    </Button>
                                    </Modal.Footer> 
                                  </Modal>

                              
                  
                                </Row>
                                </Form.Group>
        </div>
    )


}

export default TodoForm;

    
import React, { useState, useEffect} from 'react';
import {Col, Card, Row, Form,  Button} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { signout } from '../../Action/userAction';
import Menu from '../../Component/Menu'
import './Dashboard.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import firebase from "firebase";
// import {db} from "./firebase";

const Dashboard= (props)=> {
    const info = useSelector(state => state.user);
    const {loading, userInfo , error} = info;
    const dispatch = useDispatch();
    console.log(userInfo);
    
    const [todos, setTodos] = useState([]);
    
    useEffect(()=>{
        if(!userInfo){
            props.history.push("/signin");
        }
    })

    const handleSignout = () =>{
        dispatch(signout());
    }

    const addTodo = (todo) => {
        console.log("you are trying to add a to do");
        // firebase.collection("todos").add({
        //     inprogress: true,
        //     todo: todos,
        // });
        
        setTodos([todo, ...todos]);
    }

    const editTodo = (id) => {
        let newTodos = [...todos];
        newTodos = newTodos.map(todo => {
            if (todo.id === id){
                return {
                    ...todo,
                    isEditing: true,
                }
            } else {
                return {
                    ...todo,
                    isEditing: false,
                }
            }
        })
        setTodos(newTodos);
    }

    const updateTodo = (id, updatedTitle) => {
        let newTodos = [...todos];
        newTodos = newTodos.map(todo => {
          if(todo.id===id) {
            return {
              ...todo,
              title: updatedTitle,
            }
          } else {
            return {
              ...todo,
            }
          }
        });
        setTodos(newTodos);
      }

    const closeEditView = () => {
        let newTodos = [...todos]
        setTodos(newTodos.map(todo => ({
            ...todo,
            isEditing: false,
        })))
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => {
              if (todo.id === id){
                return{
                  ...todo,
                  isCompleted: !todo.isCompleted,
                }
              }
              return todo;
            })
          )
    }

    const removeTodo = (id) => {
        const newTodos = [...todos].filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    
    return (
        <div className='dashboard'>
            <Row> 
                <Col sm={3}>
                    <Menu/>
                </Col>
                <Col sm={9}>
                    <Row> 
                        <Col sm={4}> 
                            <div className='introduction'>
                                <p>
                                    Hello ... 
                                </p>
                                <p>
                                    Today is ...
                                </p>
                            </div>
                            <div className='calendar'>
                                <p>
                                    Expense List 
                                </p>
                            </div>
                        </Col>
                        <Col sm={8}> 
                            <div className='todayList'>
                                <h3>Today's todos:</h3>
                                <div className='add-todo'>
                                    <TodoForm addTodo={addTodo}/>
                                </div>

                                <div className='todo-list'>
                                <TodoList
                                    todos={todos}
                                    editTodo={editTodo}
                                    updateTodo={updateTodo}
                                    toggleComplete={toggleComplete}
                                    removeTodo={removeTodo}
                                    closeEditView={closeEditView}
                                    />
                                </div>

                                  
                            </div>
                        </Col> 
                    </Row>
                    <button onClick={handleSignout}>Sign out</button>
                </Col>
            </Row> 
        </div> 
    )
}
export default Dashboard
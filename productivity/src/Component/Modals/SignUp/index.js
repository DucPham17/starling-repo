import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Alert, Form, Modal, Spinner} from 'react-bootstrap';
import { signup } from '../../../Action/userAction';
import './SignUp.css';
import { CommonButton } from '../../Common/CommonButton';

function SignUpPage(props) {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const {loading, error} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSignin = (e) =>{
        e.preventDefault();
       // console.log(email);
        dispatch(signup(email,password,name));
    }

    return(
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                {error && <Alert variant="danger">There was a problem</Alert>}
                <Form>
                    <Form.Group id='email'>
                        <Form.Control placeholder="Email" type="email" onChange={(event) => {setEmail(event.target.value)}} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Control placeholder="Password" type="password" onChange={(event) => {setPassword(event.target.value)}} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='name'>
                        <Form.Control placeholder="Name" type="text" onChange={(event) => {setName(event.target.value)}} required></Form.Control>
                    </Form.Group>
                    <CommonButton disabled={loading} className='w-100' onClick={handleSignin} >
                        {
                            loading ?
                                <Spinner animation="border" variant="light"/> :
                                'Sign up'
                        }
                    </CommonButton>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default SignUpPage;
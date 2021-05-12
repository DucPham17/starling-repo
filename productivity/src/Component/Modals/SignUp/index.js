import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Form, Modal} from 'react-bootstrap';
import { signup } from '../../../Action/userAction';
import './SignUp.css';
import { CommonButton } from '../../Common/CommonButton';

function SignUpPage(props) {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const info = useSelector(state => state.user);
    const dispatch = useDispatch();
    const {loading, error} = info;


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
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(event) => {setEmail(event.target.value)}} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(event) => {setPassword(event.target.value)}} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={(event) => {setName(event.target.value)}} required></Form.Control>
                    </Form.Group>
                    {loading? <div>Loading...</div> : error? <div>There was a problem</div> : null}
                    <CommonButton className='w-100' onClick={handleSignin} >Sign up</CommonButton>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default SignUpPage;
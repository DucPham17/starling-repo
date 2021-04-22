import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Form, Button, Modal} from 'react-bootstrap';
import { signup } from '../../../Action/userAction';
import './SignUp.css';
import { LinkButton } from '../../../Component/Common/LinkButton';
import { setModal } from '../../../Action/modalsAction';
import { ModalTypes } from '../../../Constant/modalTypes';

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
                <Modal.Title>Sign In</Modal.Title>
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
                    <Button className='w-100' onClick={handleSignin} >Sign up</Button>
                    <LinkButton className='pt-2' onClick={() => dispatch(setModal(ModalTypes.SIGN_IN))}>Aready have an account? Click here to Sign In</LinkButton>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default SignUpPage;
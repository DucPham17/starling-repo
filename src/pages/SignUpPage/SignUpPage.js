import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Form, Button, Card} from 'react-bootstrap';
import { Container } from '@material-ui/core';
import { signup } from '../../Action/userAction';
import './SignUp.css';
import { useHistory } from 'react-router-dom';
import { LinkButton } from '../../component/common/LinkButton';

function SignUpPage(props) {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const info = useSelector(state => state.user);
    const dispatch = useDispatch();
    const {loading, error} = info;
    const history = useHistory();


    const handleSignin = (e) =>{
        e.preventDefault();
       // console.log(email);
        dispatch(signup(email,password,name));
    }

    return(
        <Container >
        <div className="Signup-container" >
            <Card >
                <Card.Body>
                    <h2 className="text-center mb-4"> Sign Up</h2>
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
                    </Form>
                </Card.Body>
            </Card>
            <LinkButton onClick={() => history.push("/signin")}>Aready have an account? Signin</LinkButton>
        </div>
        </Container>
    )
}

export default SignUpPage;
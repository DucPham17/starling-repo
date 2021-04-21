import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Form, Button, Card} from 'react-bootstrap';
import { Container } from '@material-ui/core';
import { signin } from '../../Action/userAction';
import { useHistory } from 'react-router-dom';
import './SignIn.css';
import { LinkButton } from '../../Component/common/LinkButton';

function SignInPage(props) {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const info = useSelector(state => state.user);
    const dispatch = useDispatch();
    const {loading, userInfo,error} = info;
    const history = useHistory();

    console.log(userInfo);


    const handleSignin = (e) =>{
        e.preventDefault();
       // console.log(email);
        dispatch(signin(email,password));
    }

    return(
        <Container >
        <div className="Signin-container" >
            <Card >
                <Card.Body>
                    <h2 className="text-center mb-4"> Sign In</h2>
                    <Form>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={(event) => {setEmail(event.target.value)}} required></Form.Control>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(event) => {setPassword(event.target.value)}} required></Form.Control>
                        </Form.Group>
                        {loading? <div>Loading...</div> : error? <div>Wrong in email or password</div> : null}
                        <Button className='w-100' onClick={handleSignin} >Sign in</Button>
                    </Form>
                </Card.Body>
            </Card>
            <LinkButton onClick={() => history.push("/signup")}>Don't have account? Signup</LinkButton>
        </div>
        </Container>
    )
}

export default SignInPage;
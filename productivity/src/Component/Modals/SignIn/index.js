import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Alert, Form, Modal, Spinner } from 'react-bootstrap';
import { signin } from '../../../Action/userAction';
import './SignIn.css';
import { CommonButton } from '../../Common/CommonButton';

function SignInPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, error } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSignin = (e) => {
        e.preventDefault();
        // console.log(email);
        dispatch(signin(email, password));
    }

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {error && <Alert variant="danger">Wrong email or password</Alert>}
                <Form onSubmit={handleSignin}>
                    <Form.Group id='email'>
                        <Form.Control
                            placeholder="Email"
                            type="email"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Control 
                            placeholder="Password"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </Form.Group>
                    <CommonButton disabled={loading} className='w-100' type='submit' >
                        {
                            loading ?
                                <Spinner animation="border" variant="light"/> :
                                'Sign in'
                        }
                    </CommonButton>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default SignInPage;
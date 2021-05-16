import React from 'react';
import {Modal} from 'react-bootstrap';

export const SignInError = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    You already registered, but with a different sign in method. Please try again using your original sign in method.
                </div>
            </Modal.Body>
        </Modal>
    )
}
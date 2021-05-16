import React from 'react';
import {Modal} from 'react-bootstrap';

export const Attributions = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Attributions and Credits</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>About us</h5>
                <div>
                    2021 © Starling Group
                    <br/>
                    Phuong Dinh, Ruhee Shrestha, Duc Pham, Tiffany Nguyen
                </div>
                <br/>
                <h5>Images</h5>
                <div>
                    <a target="_blank" href="https://unsplash.com/">Unsplash</a>
                </div>
                <div>
                    <a target="_blank" href="https://lottiefiles.com/14592-loader-cat">Lottiefiles (Cat 1)</a>
                </div>
                <div>
                    <a target="_blank" href="https://lottiefiles.com/46472-lurking-cat">Lottiefiles (Cat 2)</a>
                </div>
            </Modal.Body>
        </Modal>
    )
}
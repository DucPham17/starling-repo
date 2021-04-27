import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setModal } from '../../Action/modalsAction';
import { Logo } from '../../Component/Common/Logo';
import { ModalTypes } from '../../Constant/modalTypes';
import './LandingPage.css';
import queryString from "query-string";
import jwt_decode from "jwt-decode";
import {SIGNIN_ACTION_SUCCESS} from "../../Constant/userConst";
import Cookie from "js-cookie";

function LandingPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    var query = queryString.parse(props.location.search);
    console.log(query);
    if (query.token) {
      var decoded = jwt_decode(query.token);
      //console.log(decoded);
      dispatch({
        type: SIGNIN_ACTION_SUCCESS,
        payload: decoded
      })
      Cookie.set('userInfo', JSON.stringify(decoded))
      props.history.push("/signin");
    }
  }, [])


  const handleClickSignIn = () =>{
    dispatch(setModal(ModalTypes.SIGN_IN));
  }

  return (
    <div className='wrapper d-flex flex-column justify-content-between'>
      <div className='pt-5 pl-5'>
        <Logo />
      </div>
      <Container className='wrapper-container' fluid="xl">
        <h1>
          Ready to
              <br />
              Get Productive?
          </h1>
        <div className='button-wrapper'>
          <Button variant="primary" onClick={() => props.history.push('/dashboard')}>Get Started</Button>
          <Button variant="secondary" onClick={handleClickSignIn}>Have an account? Login</Button>
          {/* <Button variant="secondary" onClick={handleTestClick}>Test</Button> */}
        </div>
      </Container>
      <div />
    </div>
  );
};


export default LandingPage;
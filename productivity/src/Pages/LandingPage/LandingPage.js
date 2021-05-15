import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setModal } from '../../Action/modalsAction';
import { LinkButton } from '../../Component/Common/LinkButton';
import { ModalTypes } from '../../Constant/modalTypes';
import './LandingPage.css';
import queryString from "query-string";
import jwt_decode from "jwt-decode";
import {SIGNIN_ACTION_SUCCESS} from "../../Constant/userConst";
import Cookie from "js-cookie";
import { CommonButton } from '../../Component/Common/CommonButton';
import { useTheme } from '@material-ui/core';
import { GoogleSignInButton } from './GoogleSignInButton';
import { FacebookSignInButton } from './FacebookSignInButton';

function LandingPage(props) {
  const theme = useTheme();
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

  const handleClickSignUp = () => {
    dispatch(setModal(ModalTypes.SIGN_UP));
  };


  const handleClickSignIn = () => {
    dispatch(setModal(ModalTypes.SIGN_IN));
  };

  return (
    <div className='wrapper d-flex flex-column justify-content-center align-items-start'>
      <Container
        className='wrapper-container'
        fluid="xl"
        style={{
          marginTop: '5rem',
          color: theme.palette.primary.main
        }}
      >
        <h1>
          <strong>Welcome to our workspace</strong>
        </h1>
        <div>
          <p>
            Wasting time and energy trying to stay organized?
            <br/>
            We can help. Manage your schedule, tasks, expeneses, and more.
            <br/>
            Everything is well-designed just for you.
          </p>
        </div>
        <div className='button-wrapper'>
          <CommonButton variant="primary" className="py-3" onClick={handleClickSignUp}>Try our Workspace</CommonButton>
          <LinkButton onClick={handleClickSignIn}>Already have an account? Sign in</LinkButton>
        </div>
        <div className='social-wrapper my-5'>
          <FacebookSignInButton/>
          <GoogleSignInButton/>
        </div>
      </Container>
    </div>
  );
};


export default LandingPage;
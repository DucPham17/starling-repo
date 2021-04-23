import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Logo } from '../../Component/Common/Logo';
import './LandingPage.css';
import queryString from "query-string";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import {SIGNIN_ACTION_SUCCESS} from "../../Constant/userConst";

function LandingPage(props) {
  const history = useHistory();
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
      props.history.push("/login");
    }
  }, [])

  const handleClickSignIn = () => {
    props.history.push("/signin")
  }

  // const handleTestClick = async() =>{
  //     const userId = 123456;
  //     const {data} = await Axios.post("/api/expenses/addexpense",{userId});
  //     console.log(data);
  // }

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
          <Button variant="primary" onClick={() => history.push('/dashboard')}>Get Started</Button>
          <Button variant="secondary" onClick={handleClickSignIn}>Have an account? Login</Button>
          {/* <Button variant="secondary" onClick={handleTestClick}>Test</Button> */}
        </div>
      </Container>
      <div />
    </div>
  );
};

export default LandingPage;
import React  from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setModal } from '../../Action/modalsAction';
import { Logo } from '../../Component/Common/Logo';
import { ModalTypes } from '../../Constant/modalTypes';
import './LandingPage.css';

function LandingPage (props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickSignIn = () =>{
    dispatch(setModal(ModalTypes.SIGN_IN));
  }

  // const handleTestClick = async() =>{
  //     const userId = 123456;
  //     const {data} = await Axios.post("/api/expenses/addexpense",{userId});
  //     console.log(data);
  // }

  return (
    <div className='wrapper d-flex flex-column justify-content-between'>
      <div className='pt-5 pl-5'>
        <Logo/>
      </div>
      <Container className='wrapper-container' fluid="xl">
          <h1>
              Ready to
              <br/>
              Get Productive?
          </h1>
          <div className='button-wrapper'>
              <Button variant="primary" onClick={() => history.push('/dashboard')}>Get Started</Button>
              <Button variant="secondary" onClick={handleClickSignIn}>Have an account? Login</Button>
              {/* <Button variant="secondary" onClick={handleTestClick}>Test</Button> */}
          </div>
      </Container>
      <div/>
  </div>
  );
};

export default LandingPage;
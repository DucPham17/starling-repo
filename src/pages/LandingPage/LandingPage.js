import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Logo } from '../../component/common/Logo';
import './LandingPage.css';

export const LandingPage = () => {
  const history = useHistory();

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
              <Button variant="secondary">Have an account? Login</Button>
          </div>
      </Container>
      <div/>
  </div>
  );
};

export default LandingPage
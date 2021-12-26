import React from 'react';
import { Button } from '../../Button';
import './SignUp.css';


function SignUp() {
  return (
    <>
      <div className='signup-container'>
        <section className='signup-subscription'>
          <p className='signup-subscription-heading'>
            Join me and receive the latest news and trends of frontend development.
          </p>
          <p className='signup-subscription-text'>
            You can unsubscribe membership at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='signup-input'
                name='name'
                type='text'
                placeholder='Your Name'
              />
              <input
                className='signup-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <input
                className='signup-input'
                name='passwrd'
                type='passwrd'
                placeholder='Your Password'
              />
              <Button buttonStyle='btn--outline' buttonSize='btn--wide'>Submit</Button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignUp;
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow
} from 'mdb-react-ui-kit';

import React from 'react';
import useLogin from '../Hook/useLogin';

const Login = () => {
  const {
    username,
    password,
    error,
    handleUsernameChange,
    handlePasswordChange,
    handleLogin,
  } = useLogin();

  return ( 
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput 
                wrapperClass='mb-4 w-100' 
                label='First name' 
                id='formControlLg' 
                type='email' 
                size="lg"
                placeholder="نام کاربری"
                value={username}
                onChange={handleUsernameChange}
              />
              <MDBInput 
                wrapperClass='mb-4 w-100' 
                label='Password' 
                id='formControlLg' 
                type='password' 
                size="lg"
                placeholder="رمز عبور"
                value={password}
                onChange={handlePasswordChange}
              />

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              {error && <p className="text-danger">{error}</p>}

              <MDBBtn size='lg' onClick={handleLogin}>
                Login
              </MDBBtn>

              <hr className="my-4" />

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;

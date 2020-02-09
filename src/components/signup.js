import React, { useCallback } from "react";
import { Link, withRouter } from "react-router-dom";
import firebaseConfig from "./fireConfig";

const Signup = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseConfig
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/spaces");
        console.log("Successfully Signed Up");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  return (
    <div className='container'>
      <main className='col m8 left'>
        <h1>Get into your space</h1>
      </main>
      <aside className='col m4 right'>
        <div className='form-container'>
          <h1>Dostow Spaces</h1>
          <form onSubmit={handleSignUp}>
            <div className='email'>
              <div className='input-field'>
                <input
                  name='email'
                  id='email'
                  type='email'
                  className='validate'
                />
                <label for='email'>Email</label>
              </div>
            </div>
            <div className='password'>
              <div className='input-field'>
                <input
                  name='password'
                  id='password'
                  type='password'
                  className='validate'
                />
                <label for='password'>Password</label>
              </div>
            </div>
            <div className='confirm_password'>
              <div className='input-field'>
                <input
                  id='confirm_password'
                  type='password'
                  className='validate'
                />
                <label for='password'>Confirm Password</label>
              </div>
            </div>
            <div className='login-button'>
              <button type='submit' class='waves-effect waves-light btn'>
                Sign Up
              </button>
            </div>
            <p>
              <Link to='/'>
                <a className='login'>Already have an account?</a>
              </Link>
            </p>
          </form>
        </div>
      </aside>
    </div>
  );
};

export default withRouter(Signup);

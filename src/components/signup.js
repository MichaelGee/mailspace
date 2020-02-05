import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className='container'>
      <main className='col m8 left'>
        <h1>Get into your space</h1>
      </main>
      <aside className='col m4 right'>
        <div className='form-container'>
          <h1>Dostow Spaces</h1>
          <form>
            <div className='email'>
              <div className='input-field'>
                <input id='email' type='email' className='validate' />
                <label for='email'>Email</label>
              </div>
            </div>
            <div className='password'>
              <div className='input-field'>
                <input id='password' type='password' className='validate' />
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
              <a class='waves-effect waves-light btn'>Sign Up</a>
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

export default Signup;

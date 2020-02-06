import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "./fireConfig";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  const createUser = async () => {
    try {
      await firebase.signup(username, email, password);
      console.log("Account created successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='container'>
      <main className='col m8 left'>
        <h1>Get into your space</h1>
      </main>
      <aside className='col m4 right'>
        <div className='form-container'>
          <h1>Dostow Spaces</h1>
          <form onSubmit={handleSubmit}>
            <div className='email'>
              <div className='input-field'>
                <input
                  id='email'
                  type='email'
                  className='validate'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <label for='email'>Email</label>
              </div>
            </div>
            <div className='password'>
              <div className='input-field'>
                <input
                  id='password'
                  type='password'
                  className='validate'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
                <label for='password'>Confirm Password</label>
              </div>
            </div>
            <div className='login-button'>
              <a class='waves-effect waves-light btn' onClick={createUser}>
                Sign Up
              </a>
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fire from "./fireConfig";
import { withRouter } from "react-router-dom";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    fire.isInitialized(user => {
      setSignedIn(!!user);
    });
  });

  const handleSubmit = e => {
    e.preventDefault();
  };

  const login = async () => {
    try {
      await fire.login(email, password);
      props.history.replace("/spaces");
      console.log("Logged in successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (fire.getCurrentUser()) {
    props.history.push("/spaces");
  }

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
                <label htmlFor='email'>Email</label>
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
                <label htmlFor='password'>Password</label>
              </div>
            </div>
            <div className='login-button'>
              <a
                className='waves-effect waves-light btn'
                onClick={() => {
                  login();
                }}
              >
                Log In
              </a>
            </div>
            <p>
              <Link className='signup' to='/signup'>
                Sign up?
              </Link>
            </p>
            {signedIn ? props.history.replace("/spaces") : null}
          </form>
        </div>
        <div className='copyright'>
          <p>&copy; 2020 Dostow Spaces </p>
        </div>
      </aside>
    </div>
  );
};

export default withRouter(Login);

import React, { useState } from "react";
import { Link } from "react-router-dom";
import fire from "./fireConfig";
import { withRouter } from "react-router-dom";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const login = async () => {
    try {
      await fire.login(email, password);
      console.log("Logged in successfully");
      props.history.replace("./spaces");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (fire.getCurrentUser()) {
    props.history.push("/seller");
  }

  React.useEffect(() => {
    fire.isInitialized(user => {
      setSignedIn(!!user);
    });
  });

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
            <div className='login-button'>
              <a class='waves-effect waves-light btn' onClick={login}>
                Log In
              </a>
            </div>
            <p>
              <Link to='/signup'>
                <a className='signup'>Sign up?</a>
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

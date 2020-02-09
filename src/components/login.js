import React, { useCallback, useContext } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import firebaseConfig from "./fireConfig";
import { AuthContext } from "./auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/spaces");
        console.log("Logged in successfully");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to={"/spaces"} />;
  }

  return (
    <div className='container'>
      <main className='col m8 left-side'>
        <h1>Get into your space</h1>
      </main>
      <aside className='col m4 right-side'>
        <div className='form-container'>
          <h1>Dostow Spaces</h1>
          <form onSubmit={handleLogin}>
            <div className='email'>
              <div className='input-field'>
                <input
                  name='email'
                  id='email'
                  type='email'
                  className='validate'
                />
                <label htmlFor='email'>Email</label>
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
                <label htmlFor='password'>Password</label>
              </div>
            </div>
            <div className='login-button'>
              <button type='submit' className='waves-effect waves-light btn'>
                Log In
              </button>
            </div>
            <p>
              <Link className='signup' to='/signup'>
                Sign up?
              </Link>
            </p>
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

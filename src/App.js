import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import "./App.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route component={Login} exact path='/' />
          <Route component={Signup} exact path='/signup' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

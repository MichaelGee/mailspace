import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Spaces from "./components/spaces";
import ProtectedRoute from "./protectedRoute";
import { AuthProvider } from "./components/auth";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Switch>
            <ProtectedRoute path='/spaces' component={Spaces} />
            <Route component={Signup} exact path='/signup' />
            <Route component={Login} exact path='/' />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export const add = (a, b) => {
  return a + b;
};

export default App;

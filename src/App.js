import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Spaces from "./components/spaces";
import ProtectedRoute from "./protectedRoute";
import fire from "./components/fireConfig";
import "./App.css";

function App() {
  const [initializedFirebase, setInitializeFirebase] = React.useState(false);
  React.useEffect(() => {
    fire.isInitialized().then(val => {
      setInitializeFirebase(val);
    });
  });

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route component={Login} exact path='/' />
          <Route component={Signup} exact path='/signup' />
          <ProtectedRoute path='/spaces' component={Spaces} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

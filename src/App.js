import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header.js';
import './App.css';
import Body from './Body.js';
import Login from './Login.js';
import Home from './Home.js';
import SignIn from './SignIn.js';
import { AuthProvider } from "./AuthContext.js"
import PrivateRoute from "./PrivateRoute"
import Dashboard from './Dashboard.js';

function App() {
  return (
    <div className="App">
        {/* <Header />
        <Body /> */}
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/login">
              <Login 
                identity="Student"
              />
            </Route>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
              {/* <Dashboard />
            </PrivateRoute> */}
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

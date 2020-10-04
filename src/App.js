import React, { createContext, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Works from './Components/Works/Works';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Home from './Pages/Home/Home';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
        {/* <Navbar></Navbar>
         <Works></Works> */}
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <PrivateRoute path="/register/:work">
              <Register />
            </PrivateRoute>
        </Switch>    
        </Router>
      </UserContext.Provider>
  );
}

export default App;

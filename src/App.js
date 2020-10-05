import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Home from './Pages/Home/Home';
import Admin from './Components/Admin/Admin';
import EventTasks from './Components/EventTasks/EventTasks';
import VolunteerList from './Components/Admin/VolunteerList';
import PrivateRouteAdmin from './Components/PrivateRouteAdmin/PrivateRouteAdmin';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
 
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/admin">
         <Admin></Admin>
          </Route>
          <Route path="/tasks">
          <EventTasks></EventTasks>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/seelist">
          <VolunteerList></VolunteerList>
          </Route>
          <PrivateRoute path="/register/:work">
              <Register />
          </PrivateRoute>
          <PrivateRouteAdmin path="/admin">
            <Admin></Admin>
          </PrivateRouteAdmin>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>    
        </Router>
      </UserContext.Provider>
  );
}

export default App;

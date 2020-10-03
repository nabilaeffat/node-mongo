import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext } from 'react';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';


export const UserContext = createContext();




function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className='bg'>
      <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
   
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/destination">
          <Destination></Destination>
          </PrivateRoute>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>

  );
}

export default App;

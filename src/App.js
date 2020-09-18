import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import HotelList from './Components/HotelList/HotelList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="contain">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/hotelList">
            <HotelList></HotelList>
          </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
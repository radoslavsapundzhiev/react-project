import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Main from '../App/Main/Main';
import Footer from '../Footer/Footer';
import Cars from '../Cars/Cars';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="container">
          <Navigation/>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
          {/* <Main/> */}
          {/* <Cars/> */}
          {/* <Register/> */}
          <Footer className="footer"/>
        </div>    
      </div>
    </BrowserRouter>
  );
}

export default App;

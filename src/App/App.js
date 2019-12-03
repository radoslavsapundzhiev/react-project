import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Main from '../App/Main/Main';
import Footer from '../Footer/Footer';
import Loader from './Loader/Loader';
import Cars from '../Cars/Cars';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Profile = React.lazy(() => import('../Profile/Profile'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="container">
          <Navigation/>
          <Switch>
            <Route path="/" exact Redirect to="/">
              <Main />
            </Route>
            <Route path="/all">
              <Cars />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <React.Suspense fallback={<Loader isLoading={true} />}>
                <Profile></Profile>
              </React.Suspense>
            </Route>
            <Route path="*">
              <NotFound />
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

import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Main from '../App/Main/Main';
import Footer from '../Footer/Footer';
import Loader from './Loader/Loader';
import Cars from '../Cars/Cars';
import Logout from '../Logout/Logout';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import userService from '../service/user-service';


const Profile = React.lazy(() => import('../Profile/Profile'));

function render(Cmp, otherProps) {
  return function (props) {
    return <Cmp {...props} {...otherProps} />;
  };
}

function parseCookeis() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}
class App extends React.Component {

  constructor(props) {
    super(props);
    const cookies = parseCookeis();
    const isLogged = !!cookies['x-auth-token'];
    const username = cookies['username'];
    this.state = { isLogged, username };
  }

  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false, username: null });
      document.cookie = {};
      history.push('/');
      return null;
    });
  }

  login = (history, data) => {
    userService.login(data).then((user) => {
      this.setState({ isLogged: true, username: JSON.parse(user).username });
      history.push('/');
    }).catch();
  }
  render(){
    const { isLogged, username } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <div id="container">
            <Navigation isLogged={isLogged} username={username}/>
            <Switch>
              <Route path="/" exact Redirect to="/">
                <Main isLogged={isLogged} />
              </Route>
              <Route path="/all">
                <Cars />
              </Route>
              <Route path="/register" render={render(Register, { isLogged })}/>
              <Route path="/login" render={render(Login, { isLogged, login: this.login})}/>
              <Route path="/logout" render={render(Logout, { isLogged, logout: this.logout})} />
              <Route path="/profile">
                <React.Suspense fallback={<Loader isLoading={true} />}>
                  <Profile></Profile>
                </React.Suspense>
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer className="footer"/>
          </div>    
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

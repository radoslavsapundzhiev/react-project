import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Main from '../App/Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <div id="container">
        <Navigation/>
        <Main/>
        <Footer className="footer"/>
      </div>    
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Main from '../App/Main/Main';
import Footer from '../Footer/Footer';
import Car from '../Cars/Car/Car';

function App() {
  return (
    <div className="App">
      <div id="container">
        <Navigation/>
        {/* <Main/> */}
        <Car 
          title="Audi a3 много запазено"
          imageUrl="https://i.imgur.com/drIOsYl.jpg"
          brand="Audi"
          seller="kunio"
          fuel="Gasoline"
          year="1998"
          price="2500 $"
        />
        <Footer className="footer"/>
      </div>    
    </div>
  );
}

export default App;

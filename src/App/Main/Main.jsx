import React from 'react';
import './Main.css';

function Main() {
    return <div id="main">
        <div id="welcome-container">
            <h1>Welcome to Car Zone</h1>
            <img src="/finance-car.png" alt="carIntro" />
            <h2>Login or register to check out our listings or to make one</h2>
            <div id="button-div">
                <a className="button" href="/login">Login</a>
                <a className="button" href="/register">Register</a>
            </div>
        </div>
    </div>
};

export default Main;
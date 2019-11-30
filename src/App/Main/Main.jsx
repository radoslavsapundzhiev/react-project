import React from 'react';
import './Main.css';
import Link from '../../shared/Link/Link';

function Main() {
    return <div id="main">
        <div id="welcome-container">
            <h1>Welcome to Car Zone</h1>
            <img src="/finance-car.png" alt="carIntro" />
            <h2>Login or register to check out our listings or to make one</h2>
            <div id="button-div">
                <Link className="button" url="#">Login</Link>
                <Link className="button" url="#">Register</Link>
            </div>
        </div>
    </div>
};

export default Main;
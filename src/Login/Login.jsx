import React from 'react';
import '../shared/styles/LoginAndRegister.css';

export default function Login(){
    return <div id="login">
        <form>
            <div className="container">
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr/>

                <p>Username</p>
                <input placeholder="Enter Username" type="text"/>

                <p>Password</p>
                <input placeholder="Enter Password" type="password"/>
                <button type="submit" className="registerbtn">Login</button>

                <div class="container signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </div>
}
import React from 'react';
import '../shared/styles/LoginAndRegister.css';

export default function Register(){
    return <div id="register">
        <form>
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <p>Username</p>
                <input type="text" placeholder="Enter Username" required/>

                <p>Password</p>
                <input type="password" placeholder="Enter Password" required/>

                <p>Repeat Password</p>
                <input type="password" placeholder="Enter Repeat Password" required/>
                <hr/>
                
                <button type="submit" className="registerbtn">Register</button>
                <div className="container signin">
                    <p>Already have an account?<a href="/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    </div>
}
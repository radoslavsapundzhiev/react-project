import React from 'react';
import '../shared/styles/LoginAndRegister.css';

import withForm from '../shared/hocs/withForm';

class Login extends React.Component{

    usernameChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = () => {
        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        this.props.login(this.props.history, data);
    }
    render(){
        return <div id="login">
        <form>
            <div className="container">
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr/>

                <p>Username</p>
                <input placeholder="Enter Username" type="text" onChange={this.usernameChangeHandler}/>

                <p>Password</p>
                <input placeholder="Enter Password" type="password" onChange={this.passwordChangeHandler}/>
                <button type="button"  onClick={this.submitHandler} className="registerbtn">Login</button>

                <div class="container signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </div>
    }
}

export default withForm(Login, { username: '', password: '' });
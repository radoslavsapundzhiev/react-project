import React from 'react';
import * as yup from 'yup';

import '../shared/styles/LoginAndRegister.css';
import withForm from '../shared/hocs/withForm';
import userService from '../service/user-service';

class Register extends React.Component {
    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
    rePasswordOnChangeHandler = this.props.controlChangeHandlerFactory('rePassword');

  submitHandler = () => {
    const errors = this.props.getFormErrorState();
    if (!!errors) { return; }
    const data = this.props.getFormState();
    userService.register(data).then(() => {
        this.props.history.push('/login');
    });
  };

  getFirstControlError = name => {
    const errorState = this.props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };

  render(){
    const usernameError = this.getFirstControlError('username');
    const passwordError = this.getFirstControlError('password');
    const rePasswordError = this.getFirstControlError('rePassword');

    return <div id="register">
        <form>
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <p>Username</p>
                <input type="text" onChange={this.usernameOnChangeHandler} placeholder="Enter Username" required/>
                {usernameError && <div id="errorBox" className="notification">{usernameError}</div>}

                <p>Password</p>
                <input type="password" onChange={this.passwordOnChangeHandler} placeholder="Enter Password" required/>
                {passwordError && <div id="errorBox" className="notification">{passwordError}</div>}

                <p>Repeat Password</p>
                <input type="password" onChange={this.rePasswordOnChangeHandler} placeholder="Enter Repeat Password" required/>
                {rePasswordError && <div id="errorBox" className="notification">{rePasswordError}</div>}
                <hr/>
                
                <button type="button" onClick={this.submitHandler} className="registerbtn">Register</button>
                <div className="container signin">
                    <p>Already have an account?<a href="/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    </div>
  }
}

const initialFormState = {
    username: '',
    password: '',
    rePassword: ''
  };
  
  const schema = yup.object({
    username: yup.string('Username shoud be a string')
      .required('Username is required')
      .min(4, 'Username should be more than 4 chars'),
  
    password: yup.string('Password must be a string')
      .required('Password is required')
      .min(6, 'Password must be more than 6 chars'),
  
    rePassword: yup.string('Password must be a string')
    // .oneOf([yup.ref('password'), ''], 'Passwords don\'t match')
    // .required('Password is required')
    // .min(6, 'Password must be more than 6 chars')
  });
  
  
  export default withForm(Register, initialFormState, schema);

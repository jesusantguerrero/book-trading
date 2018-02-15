import React, { Component } from 'react';
import './../assets/css/LoginBox.css';

export default class LoginBox extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  }

  render() {
    return(
      <div className="card loginbox w-50">
        <div className="loginbox__header">
          <button className="loginbox__tab active"> Login </button>
          <button className="loginbox__tab"> Sign up </button>
        </div>
        <form className="loginbox__body">
          <div className="form-group">
            <label> Email</label>
            <input className="form-control" type="email"/>
            </div> 
            <div className="form-group">
            <label> Password</label>
            <input className="form-control" type="password"/>
            </div> 
            <a className="btn btn-primary"> Login </a>
        </form>
      </div>
    )
  }
}
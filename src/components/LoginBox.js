import React, { Component } from 'react';
import './../assets/css/LoginBox.css';

export default class LoginBox extends Component {
  state = {
    credentials: {
      email: '',
      password: '',
      fullName: '',
    },
    confirmPassword: '',
    loginMode: false
  }

  render() {
    return(
      <div className="card loginbox w-50">
        <div className="loginbox__header">
          <button className={this.tabStateLogin()} onClick={this.changeState('login')}> Login </button>
          <button className={this.tabStateSignup()}  onClick={this.changeState('signup')}> Sign up </button>
        </div>
        <form className="loginbox__body">
          <div className="form-group">
            <label> Email</label>
            <input className="form-control" name="email" type="email"/>
          </div> 
          {!this.state.loginMode && (
            <div className="form-group">
              <label> Password</label>
              <input className="form-control" name="password" type="password"/>
            </div> 
          )}
          <div className="form-group">
            <label> Fullname</label>
            <input className="form-control" name="email" type="text"/>
          </div> 
          <a className="btn btn-primary"> Login </a>
        </form>
      </div>
    )
  }

  changeState = (tabName) => {
    this.setState({ loginMode: (tabName === 'login')});
  }

  tabStateLogin =  () => {
    return `loginbox__tab ${(this.state.loginMode) ? 'active': '' }`
  }
  tabStateSignup = () => {
    return `loginbox__tab ${(!this.state.loginMode) ? 'active': '' }`
  }


}
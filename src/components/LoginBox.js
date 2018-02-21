import React, { Component } from 'react';
import axios from 'axios';
import './../assets/css/LoginBox.css';

export default class LoginBox extends Component {
  state = {
    credentials: {
      email: '',
      password: '',
      fullname: '',
    },
    confirmPassword: '',
    loginMode: false
  }

  render() {
    return(
      <div className="card loginbox w-50">
        <div className="loginbox__header">
          <button className={this.tabStateLogin()} onClick={this.changeMode.bind(null,true)}> Login </button>
          <button className={this.tabStateSignup()}  onClick={this.changeMode.bind(null,false)}> Sign up </button>
        </div>
        <form className="loginbox__body" onSubmit={this.registerOrLogin}>
          <div className="form-group">
            <label> Email</label>
            <input className="form-control" name="email" onChange={this.handleInputChange} type="email"/>
          </div> 
          {!this.state.loginMode && (
            <div className="form-group">
              <label> Fullname</label>
              <input className="form-control" name="fullname" onChange={this.handleInputChange} type="text"/>
            </div> 
          )}
          <div className="form-group">
              <label> Password</label>
              <input className="form-control" name="password" onChange={this.handleInputChange} type="password"/>
            </div> 
          <input type="submit" className="btn btn-block btn-primary" onSubmit={this.registerOrLogin} value={this.textSubmit()}/>
        </form>
      </div>
    )
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    const credentials = this.state.credentials;
    credentials[name] = value;
    this.setState({ credentials : credentials });
  }

  changeMode = (mode) => {
    this.setState({ loginMode: mode });
  }

  textSubmit = () => {
    return (this.state.loginMode) ? 'login' : 'sign up';
  }

  tabStateLogin =  () => {
    return `loginbox__tab ${(this.state.loginMode) ? 'active': '' }`
  }

  tabStateSignup = () => {
    return `loginbox__tab ${(!this.state.loginMode) ? 'active': '' }`
  }

  registerOrLogin = (e) => {
    e.preventDefault();
    return (this.state.loginMode) ? this.login() : this.register();
    
  }

  register = () => {
    const { password, email, fullname } = this.state.credentials;
    if (password && email && fullname && password.length > 4 ) {
      this.send('register')
    } else {
      alert(' fill all the fields');
    }
  }

  login = () => {
    const { password, email, fullname } = this.state.credentials;
    if (password && email && fullname && password.length > 4 ) {
      this.send('register')
    } else {
      alert(' fill all the fields');
    }
  }

  send = (endpoint) => {
    axios.post(`/auth/${endpoint}`, this.state.credentials)
      .then((result) => {
        if (result.data) {
          console.log(result.data);
        }
      })
  }

}
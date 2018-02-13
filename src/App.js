import React, { Component } from 'react';
import './assets/css/App.css';
import AppHeader from './components/AppHeader';

class App extends Component {
  state = {
    message: ' for React + Node.js'
  };

  render() {
    return (
      <div className="App">
        <AppHeader/>
        Template {this.state.message}
      </div>
    );
  }
}

export default App;

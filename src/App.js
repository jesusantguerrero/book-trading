import React, { Component } from 'react';
import './assets/css/App.css';
import AppHeader from './components/AppHeader';
import AppCover from './components/AppCover';

class App extends Component {
  state = {
    message: ' for React + Node.js'
  };

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <AppCover/>
         {this.state.message}
      </div>
    );
  }
}

export default App;

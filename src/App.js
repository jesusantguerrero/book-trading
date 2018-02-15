import React, { Component } from 'react';
import './assets/css/App.css';
import AppHeader from './components/AppHeader';
import AppCover from './components/AppCover';
import AppHome from './components/AppHome';

class App extends Component {
  state = {
    message: ' for React + Node.js'
  };

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <AppCover/>
        <AppHome/>
        <footer> Code and design by @JesusAntGuerrero</footer>
      </div>
    );
  }
}

export default App;

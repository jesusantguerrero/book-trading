import React, { Component } from 'react';
import './assets/css/App.css';

class App extends Component {
  state = {
    message: ' for React + Node.js'
  };

  render() {
    return (
      <div className="App">
        Template {this.state.message}
      </div>
    );
  }
}

export default App;

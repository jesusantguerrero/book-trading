import React, { Component } from 'react';
import axios from 'axios';
import './assets/css/App.css';
import AppHeader from './components/AppHeader';
import AppCover from './components/AppCover';
import AppHome from './components/AppHome';

class App extends Component {
  state = {
    message: ' for React + Node.js',
    newBook: {}
  };

  render() {
    return (
      <div className="App">
        <AppHeader action={this._setBook} addBook={this._addBook}/>
        <AppCover/>
        <AppHome/>
        <footer> Code and design by @JesusAntGuerrero</footer>
      </div>
    );
  }

  _setBook = (book) => {
    this.setState({ newBook: book });
  }

  _addBook = (e) => {
    e.preventDefault();
    if (this.state.newBook) {
      const data = `data=${JSON.stringify(this.state.newBook)}`;
      axios.post('/books/add/1', data)
        .then((res) => {
          if (res.data) {
            this.setState({ book: {} });
          } else {
  
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}

export default App;

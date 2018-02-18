import React, { Component } from 'react';
import axios from 'axios';
import './assets/css/App.css';
import AppHeader from './components/AppHeader';
import AppCover from './components/AppCover';
import AppHome from './components/AppHome';

class App extends Component {
  state = {
    message: ' for React + Node.js',
    newBook: {},
    books: [],
  };

  render() {
    return (
      <div className="App">
        <AppHeader action={this._setBook} addBook={this._addBook}/>
        <AppCover/>
        <AppHome books={this.state.books} limit={4}/>
        <footer> Code and design by @JesusAntGuerrero</footer>
      </div>
    );
  }

  componentDidMount() {
    this._getBooks();
  }

  _getBooks = () => {
    axios.get('/books')
      .then((res) => {
        const books = (res.data) ? res.data : [];
        this.setState({ books : books });
      })
  }

  _setBook = (book) => {
    this.setState({ newBook: book });
  }

  _addBook = (e) => {
    e.preventDefault();
    if (this.state.newBook) {
      const data = `bookId=${this.state.newBook.id}`;
      axios.post('/books/add/1', data)
        .then((res) => {
          if (res.data) {
            this.setState({ book: {} });
          } else {
  
          }
          this._getBooks();
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}

export default App;

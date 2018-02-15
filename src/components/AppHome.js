import React, { Component } from 'react';
import './../assets/css/AppHome.css';
import BookItem from './BookItem';

export default class AppHome extends Component {
  render() {
    return(
      <div className="app-home row">
        <div className="col-md-4">
          <h2> Filters </h2>
        </div>
        <div className="col-md-8">
          <h2 className="section-title"> Users' books </h2>
          <div className="book-list">
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
          </div>
        </div>
      </div>
    )
  }
}
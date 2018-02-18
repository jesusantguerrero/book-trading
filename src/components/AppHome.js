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
          <h2 className="section-title"> Last Users' books </h2>
          <div className="book-list">
            {this.renderList()}
          </div>
        </div>
      </div>
    )
  }

  renderList() {
    let rendered = [];
    const { limit, books } = this.props;

    if ( limit && (books.length < limit)) {
      rendered = books.map((item) => {
        return (<BookItem item={item}/>)
      })
    } else {
      rendered = books.slice(0, this.props.limit).map((item) => {
        return (<BookItem item={item}/>)
      })
    }
    return rendered;
  }
}
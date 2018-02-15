import React from 'react';
import './../assets/css/BookItem.css';
import background from './../assets/img/book-background.jpg';

const BookItem = props => {
  return(
    <div className="book-item">
      <div className="book-item__image">
        <img src={background} alt="book-image"/>
      </div>
      <div className="book-item__body">
        <h4 className="book-item__title"> Title </h4>
        <span>by Author Name</span>
        <span>Rating</span>
        <p>description</p>
        <small> book of <span className="book-item__owner"> Me</span></small>
      </div>
      <button className="book-item__btn"> Request Trade </button>
    </div>
  ) 
}

export default BookItem;
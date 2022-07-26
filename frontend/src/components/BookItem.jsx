import './../assets/css/BookItem.css';
import background from './../assets/img/book-background.jpg';

export const BookItem = ({ item }) => {
  const info = item.volumeInfo;
  
  if (item) {
    return(
      <div className="book-item">
        <div className="book-item__image">
          <img src={info.imageLinks.thumbnail} alt="book"/>
        </div>
        <div className="book-item__body">
          <h4 className="book-item__title"> {info.title} </h4>
          <p>by {info.authors.join(' ')}</p>
          <p>Rating</p>
          <p> {info.description.slice(0, 30) + '...'}</p>
          <small> book of <span className="book-item__owner">{item.owner}</span></small>
        </div>
        <button className="book-item__btn"> Request Trade </button>
      </div>
    ) 
  }
}
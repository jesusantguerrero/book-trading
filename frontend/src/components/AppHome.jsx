import { BookItem } from './BookItem';
import './../assets/css/AppHome.css';

export default function AppHome ({ limit, books }) {
  const renderList = () =>{
    if ( limit && (books.length < limit)) {
      return books.map((item) =>  (<BookItem item={item}/>))
    } else {
      return books.slice(0, this.props.limit).map((item) => (<BookItem item={item}/>))
    }
  }  
  
  return(
      <div className="app-home row">
        <div className="col-md-4">
          <h2> Filters </h2>
        </div>
        <div className="col-md-8">
          <h2 className="section-title"> Last Users' books </h2>
          <div className="book-list">
            {renderList()}
          </div>
        </div>
      </div>
    )
}
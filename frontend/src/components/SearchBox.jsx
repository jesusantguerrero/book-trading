/* eslint-disable import/first */

import './../assets/css/SearchBox.css';

export const SearchBar = ({ id, addBook }) => {
  const processResults = (data) => {
    const results = data.items.map((item) => {
      return { 
        id: item.id,
        text: item.volumeInfo.title
      }
    });

    return {
      results: results,
    }
  }

  return(
      <form className="inline-form searchbox">
        <div className="input-group">
          <select id={id} type="search" className="form-control searchbox__text"/>
          <button className="append-addon searchbox__button" onClick={addBook}> + </button>
        </div>
      </form>
    )
}
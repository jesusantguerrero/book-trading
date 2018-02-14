import React, { Component } from 'react';
import './../assets/css/SearchBox.css';

export default class SearchBar extends Component {
  state = {

  }

  render() {
    return(
      <form className="inline-form searchbox">
        <div className="input-group">
          <input type="search" className="form-control searchbox__text"/>
          <button className="append-addon searchbox__button">Buscar</button>
        </div>
      </form>
    )
  }
}
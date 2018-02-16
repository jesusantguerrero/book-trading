/* eslint-disable import/first */

import React, { Component } from 'react';
import jquery from 'jquery';
const $ = jquery;
import 'select2/';
import 'select2/dist/css/select2.css'
import './../assets/css/SearchBox.css';

window.$ = window.jQuery = jquery;

export default class SearchBar extends Component {
  state = {
  
  }

  componentDidMount() {
    this.init()
  }

  render() {
    return(
      <form className="inline-form searchbox">
        <div className="input-group">
          <select id={this.props.id} type="search" className="form-control searchbox__text"/>
          <button className="append-addon searchbox__button" onClick={this.props.addBook}> + </button>
        </div>
      </form>
    )
  }

  init() {
    const self = this;
    const sel = $(`#${this.props.id}`).select2({
      ajax: {
        url: 'https://www.googleapis.com/books/v1/volumes',
        dataType: 'json',
        delay: 250,
        data: params => {return { q: params.term } },
        processResults: self.processResults,
        cache: true
      }
    })

    sel.on('select2:select', (e) => {
      return (this.props.action) ? this.props.action(e.params.data) : null
    })
  }

  processResults(data) {
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
}
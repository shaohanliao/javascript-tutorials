import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { data } from './data';

class BibleCatalogueBody extends Component {
  static propTypes = {
    onSelect: PropTypes.func,
    selectedBookId: PropTypes.string
  }
  
  constructor(props){
    super(props)
  }

  render() {
    const { onSelect, selectedBookId } = this.props;
    
    return (
      <div className="list-content">
        <div className="bookGroup">
          <div className="title">
            旧约
          </div>
          <ul className="list">
            {data.groups.旧约.map(
              (bookId, index) => {
                let nameCn = undefined;
                data.books.forEach(
                  (bookObj, index) => {
                    if(bookObj.id === bookId){
                      nameCn = bookObj.nameCn
                    }
                  }
                )
                return(
                  <li 
                    key={bookId} 
                    className={bookId === selectedBookId ? "highlighted" : " "} 
                    role="button" 
                    onClick={
                      () => {
                        onSelect(bookId)
                      }
                    }
                  >
                    <span>{nameCn}</span>
                  </li>
                )
              }
            )}
          </ul>
        </div>
        <div className="bookGroup">
          <div className="title">
            新约
          </div>
          <ul className="list">
          {data.groups.新约.map(
              (bookId, index) => {
                let nameCn = undefined;
                data.books.forEach(
                  (bookObj, index) => {
                    if(bookObj.id === bookId){
                      nameCn = bookObj.nameCn
                    }
                  }
                )
                return(
                  <li 
                    key={bookId} 
                    className={bookId === selectedBookId ? "highlighted" : " "} 
                    role="button" 
                    onClick={
                      () => {
                        onSelect(bookId)
                      }
                    }
                  >
                    <span>{nameCn}</span>
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default BibleCatalogueBody;
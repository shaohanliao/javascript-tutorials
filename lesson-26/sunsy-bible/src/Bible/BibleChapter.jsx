import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { data } from './data';

class BibleChapter extends Component {
  static propTypes = {
    selectedBookId: PropTypes.string,
    selectedChapter: PropTypes.number,
    onSelect: PropTypes.func
  }
  
  constructor(props){
    super(props);
  }

  render() {
    const { selectedBookId, selectedChapter, onSelect } = this.props;
    let chapterCount = 0;
    data.books.forEach(
      (obj) => {
        if(obj.id === selectedBookId){
          chapterCount = parseInt(obj.chapterCount)
        }
      }
    )
    return (
      <div 
        className="column chapterSelector client-height" 
        style={ parseInt(selectedBookId) ? {display: " "} : {display: "none"} }
      >
        <div className="title">
          <div className="left">
            <span style={{paddingLeft: 5, fontWeight: 'bold'}}>章</span>
          </div>
        </div>
        <div className="list-content">
          <ul className="grid">
            {[...Array(chapterCount)].map(
              (_, index) => {
                return(
                  <li 
                    key={index} 
                    role="button" 
                    type="default"
                    className={(index + 1) === selectedChapter ? "highlighted" : " "}
                    onClick={
                      () => {
                        onSelect(index + 1)
                      }
                    }
                  >
                    {index + 1}
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

export default BibleChapter;
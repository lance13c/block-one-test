import React, { Component } from 'react';
import './Block.css';

class Block extends Component {
  render() {
    return (
      <li className="block"  onClick={(e) => {console.log('dfd'); this.clicked(e)}}>
        <div className="display">
          <div className="display-data"><strong>ID: </strong> {this.props.block.id}</div>
          <div className="display-data"><strong>Timestamp: </strong>{this.props.block.timestamp}</div>
        </div>
        <div className="details">
          <h3>Details</h3>
          {Object.keys(this.props.block).map((key, i) => {
            return <div key={i} className="details-data">{key}: {this.props.block[key]}</div>
          })}
         </div>
      </li>
    );
  }

  /**
   * Adds and removes a class from an element to indicate if it is active or not active. 
   * @param {Event} e - The event emitted from an onClick listener 
   */
  clicked(e) {
    let block = e.currentTarget;
    block.classList.toggle('active');
  }
}

export default Block;

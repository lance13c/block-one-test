import React, { Component } from 'react';
import './Block.css';

class Block extends Component {
  render() {
    return (
      <li className="block">
        <span>{this.props.number}</span>
      </li>
    );
  }
}

export default Block;

import React, { Component } from 'react';
import './BlockList.css';
import Button from '../Button/Button';
import Eos from 'eosjs';

class BlockList extends Component {

  constructor(props) {
    super(props);

    // Eos Setup

  }

  render() {
    return (
      <div className="BlockList">
        <header>
          <h1>BlockList</h1>
        </header>
        <Button name="LOAD"/>
        <ul className="BlockList__list"></ul>
      </div>
    );
  }

  setupEos() {
    return Eos({
      
    });
  }

  getRecentBlocks() {

  }
}

export default BlockList;

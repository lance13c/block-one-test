import React, { Component } from 'react';
import './BlockList.css';
import Button from '../Button/Button';
import Eos from 'eosjs';

class BlockList extends Component {

  constructor(props) {
    super(props);

    // Eos Setup
    //this.eos = this.setupEos();
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

  fetchConfigs() {

  }

  setupEos() {
    let eos = undefined;

    try {
      eos = Eos({
        //chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906", // 32 byte (64 char) hex string
        //keyProvider: ['PrivateKeys...'], // WIF string or array of keys..
        httpEndpoint: 'localhost:3000',
        //expireInSeconds: 60,
        //broadcast: true,
        //verbose: false, // API activity
        //sign: false
      });
    } catch (e) {
      throw new Error(`${e}`);
    }

    return eos;
  }

  getRecentBlocks() {

  }
}

export default BlockList;

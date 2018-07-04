import React, { Component } from 'react';
import './BlockList.css';
import Block from '../Block/Block';
import Eos from 'eosjs';
import eosConfig from '../../eos.config';

class BlockList extends Component {

  constructor(props) {
    super(props);

    this.REQUEST_AMOUNT = 10;

    this.mostRecentBlockId = 0;
    this.state = {
      recentBlocks: []
    }

    // Eos Setup
    this.eos = this.setupEos();
    this.updateBlocks();

    //this.state.updateBlocks = this.updateBlocks.bind(this);
  }

  render() {
    return (
      <div className="block-list-wrapper">
        <button className="load-button" onClick={this.updateBlocks.bind(this)}>LOAD</button>
        <ul className="block-list">
          { this.state.recentBlocks.map((block, i) =>
            <Block key={i} block={block} />
          )}
        </ul>
      </div>
    );
  }

  componentDidMount() {

    //let loadButton = document.querySelector(".load-button");
    //let blockListEl = document.querySelector('.block-list__list');

    // loadButton.addEventListener("touchstart click", (e) => {
    //   // Update Blocks
    // });
  }

  /**
   * Fetches the most recent blocks from the prespecified block chain.
   * @param {Number} amount - The quantity of most recent blocks to get
   * @return {Array} - An array of block objects. 
   */
  async fetchRecentBlocks(amount) {
    let recentBlocks = [];

    try {
      let info = await this.eos.getInfo({});
      let headBlockNum = info.head_block_num;

      // Check if amount is greater than head block
      //if (headBlockNum > amount) 
  
      for (let i = 0; i < amount; i++) {
        let block = await this.eos.getBlock(headBlockNum - i);
        recentBlocks.push(block);
      }
    } catch (e) {
      throw new Error(e);
    }

    return recentBlocks;
  }

  updateBlocks() {
    this.fetchRecentBlocks(this.REQUEST_AMOUNT).then((response) => {
      this.setState((prevState, props) => {
         console.log(response[0]);
         return {recentBlocks: prevState.recentBlocks = response};
      });
    });

    //console.log(this.eos.getBlock());
  }

  // Instantiates eosjs
  /**
   * @return {Object} - The eos object
   */
  setupEos() {
    let eos = undefined;
    try {
      eos = Eos(eosConfig);
    } catch (e) {
      throw new Error(`${e}`);
    }
    return eos;
  }

  getRecentBlocks() {

  }
}

export default BlockList;

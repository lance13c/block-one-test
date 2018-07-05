import React, { Component } from 'react';
import './BlockList.css';
import Block from '../Block/Block';
import Eos from 'eosjs';
import eosConfig from '../../eos.config';

class BlockList extends Component {

  constructor(props) {
    super(props);

    this.REQUEST_AMOUNT = 10;

    this.previousBlockNumber = undefined;
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
  }

  /**
   * Fetches the most recent blocks from the prespecified block chain.
   * @param {Number} amount - The quantity of most recent blocks to get if previousBlockNumber is undefined
   * @param {Number} previousBlockNumber - The number of a previous block recieved from the blockchain. This is used
   * to evaluate how many new blocks to fetch
   * @return {Array} - An array of block objects.
   */
  async fetchRecentBlocks(amount, previousBlockNumber) {
    let recentBlocks = [];

    const MAX_AMOUNT = amount;

    try {
      let info = await this.eos.getInfo({});
      let headBlockNum = info.head_block_num;

      // Calculate how many number
      if (previousBlockNumber !== undefined) {
        if (previousBlockNumber > headBlockNum) {
          throw new Error('Head block number is less than a previous block');
        }
        amount = headBlockNum - previousBlockNumber;
        amount = (amount > MAX_AMOUNT) ? MAX_AMOUNT: amount;
      }
  
      for (let i = 0; i < amount; i++) {
        // Preformed syncronously to keep them in order. TODO: Call in parellel 
        // then sort if this function ever needs to fetch more than 10 blocks.
        let block = await this.eos.getBlock(headBlockNum - i);
        recentBlocks.push(block);
      }

      this.previousBlockNumber = recentBlocks[0].block_num;

    } catch (e) {
      throw new Error(e);
    }
    return recentBlocks;
  }

  updateBlocks() {
    this.fetchRecentBlocks(this.REQUEST_AMOUNT, this.previousBlockNumber).then((response) => {

      let blockEls = document.querySelectorAll('.block');
      blockEls = [...blockEls];
      blockEls.slice(response.length);

      blockEls.forEach((blockEl) => {
        response.push(this.state.recentBlocks.shift());
        blockEl.classList.add('drop');
      });
      

      this.setState((prevState, props) => {
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

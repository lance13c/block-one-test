import React, { Component } from 'react';
import './Block.css';

class Block extends Component {
  render() {
    return (
      <li className="block"  onClick={(e) => {console.log('dfd'); this.clicked(e)}}>
        <div className="display-data"><strong>ID: </strong> {this.props.id}</div>
        <div className="display-data"><strong>Timestamp: </strong>{this.props.timestamp}</div>
        <div className="details">
          <div className="details-data">action_mroot: {this.props.action_mroot}</div>
          <div className="details-data">block_extensions: {this.props.block_extensions}</div>
          <div className="details-data">block_num: {this.props.block_num}</div>
          <div className="details-data">confirmed: {this.props.confirmed}</div>
          <div className="details-data">header_extensions: {this.props.header_extensions}</div>
          <div className="details-data">new_producers: {this.props.new_producers}</div>
          <div className="details-data">previous: {this.props.previous}</div>
          <div className="details-data">producer: {this.props.producer}</div>
          <div className="details-data">producer_signature: {this.props.producer_signature}</div>
          <div className="details-data">ref_block_prefix: {this.props.ref_block_prefix}</div>
          <div className="details-data">schedule_version: {this.props.schedule_version}</div>
          <div className="details-data">transaction_mroot: {this.props.transaction_mroot}</div>
          <div className="details-data">transactions: {this.props.transactions}</div>
        </div>
      </li>
    );
  }

  clicked(e) {
    let block = e.currentTarget;
    block.classList.toggle('active');
  }
}

export default Block;

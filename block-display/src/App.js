import React, { Component } from 'react';
import './App.css';
import BlockList from './components/BlockList/BlockList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Block Display</h1>
        </header>
        <BlockList/>
      </div>
    );
  }
}

export default App;

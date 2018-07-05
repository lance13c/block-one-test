import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import EosMock from '../../mocks/Eos/Eos.mock';
import Eos from 'eosjs';
import BlockList from './BlockList';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlockList />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('setupEos', () => {

  // beforeEach(() => {
  //   jest.mock("eosjs");
  //   Eos.mockClear();
  //   Eos.mockImplementation(EosMock.Eos);
  // });

  it('does not throw an error', () => {
    jest.mock("eosjs");
    Eos.mockClear();
    Eos.mockImplementation(EosMock.Eos);

      const wrapper = shallow(<BlockList />);
      const instance = wrapper.instance();

      //instance.setupEos();
  });
});

describe('fetchRecentBlocks', () => {

  it('returns a promise', () => {
      // const wrapper = shallow(<BlockList />);
      // const instance = wrapper.instance();

      // instance.fetchRecentBlocks(1).then((data) => {
      //   expect(type(data)).toBe('Array');
      // });
  });
});





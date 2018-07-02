import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BlockList from './BlockList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlockList />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('setupEos', () => {
  it('does not throw an error', () => {
      const wrapper = shallow(<BlockList />);
      const instance = wrapper.instance();

      instance.setupEos();
  });
});

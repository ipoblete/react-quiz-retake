import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelctor', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<TextSelector text="ryan" onChange={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('can change text', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<TextSelector text="ryan" onChange={onChange} />);

    expect(wrapper.find('input').simulate('change', {
      target: {
        name: 'text',
        value: 'myArtist'
      }
    }));
    expect(wrapper.state().text).toEqual('myArtist');
    setTimeout(() => {
    }, 500);
  });
});

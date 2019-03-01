import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { wrap } from 'module';

describe('App', () => {

  it('can change text', () => {
    const wrapper = mount(<App />);

    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'click');

    wrapper.find('button').simulate('click', {
      preventDefault: jest.fn()
    });

    expect(instance.click).toHaveBeenCalled();
  });
});

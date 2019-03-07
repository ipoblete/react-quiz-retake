import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

describe('Display', () => {
  it('matches a snapshot', () => {
    const display = renderer.create(
      <Display />
    ).toJSON();

    expect(display).toMatchSnapshot();
  });
});

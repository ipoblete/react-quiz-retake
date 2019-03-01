import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';

describe('Display', () => {
  it('matches a snapshot', () => {
    const display = {
      title: 'fluffy',
      subtitle: 'alive',
    };
    const tree = renderer.create(
      <Display display={display} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

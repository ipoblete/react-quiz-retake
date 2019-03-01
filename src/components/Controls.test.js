import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './Controls';

describe('Controls', () => {
  it('matches a snapshot', () => {
    const controls = {
      title: 'this',
      subtitle: 'that'
    };
    const tree = renderer.create(
      <Controls controls={controls} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

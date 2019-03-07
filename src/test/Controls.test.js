import React from 'react';
import renderer from 'react-test-renderer';
import Controls from '../components/Controls';

describe('Controls', () => {
  it('matches a snapshot', () => {
    const controls = renderer.create(
      <Controls />
    ).toJSON();

    expect(controls).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { Controls } from '../components/Controls';

describe('Controls test', () => {
  it('matches a snapshot', () => {
    const controls = jest.fn();
    const tree = renderer.create(
      <Controls controls={controls} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


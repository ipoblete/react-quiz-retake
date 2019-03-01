import React from 'react';
import renderer from 'react-test-renderer';
import { Display } from '../components/Display';

describe('Display test', () => {
  it('matches a snapshot', () => {
    const display = {
      title: 'React',
      subtitle: 'Quiz'
    };
    const tree = renderer.create(
      <Display display={display} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

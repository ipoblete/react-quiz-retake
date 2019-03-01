import React from 'react';
import PropTypes from 'prop-types';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';

export default class App extends React.PureComponent {
  state = {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    text: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  click() {
    console.log('click');
  }

  render() {
    const { color, backgroundColor, text } = this.state;
    return (
      <>
        <button onClick={this.click.bind(this)}>Click</button>
        <TextSelector text={text} onChange={this.handleChange} />
        <ColorSelector
          color={color}
          backgroundColor={backgroundColor}
          onChange={this.handleChange}
        />
        <Shape
          color={color}
          backgroundColor={backgroundColor}
          text={text}
        />
      </>
    );
  }
}

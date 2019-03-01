import React, { Component } from 'react';
import Controls from './Controls';
import Display from './Display';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {
  state = {
    title: 'Hi',
    subtitle: ''
  };
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  render() {
    const {
      title, 
      subtitle
    } = this.state;

    return (
      <>
        <Controls
          title={title}
          subtitle={subtitle}
        />
        <Display
          title={title}
          subtitle={subtitle}
        />
      </>
    );
  }
}

export default App;

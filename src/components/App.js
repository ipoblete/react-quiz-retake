import React, { Component } from 'react';
import Controls from './Controls';
import Display from './Display';

export default class App extends Component {

  state = {
    title: '',
    subtitle: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const {
      title,
      subtitle
    }
    = this.state;

    return (
    <>
    <h1>REACT QUIZ RETAKE</h1>

    <Controls
      title={title}
      subtitle={subtitle}
      onChange={this.handleChange}
    />
  

    <Display 
      title={title}
      subtitle={subtitle}
    />

    </>
    );
  }
}

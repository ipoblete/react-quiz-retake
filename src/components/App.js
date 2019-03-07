import React, { Component } from 'react';
import Controls from './Controls';
import Display from './Display';
import 'normalize.css';
import '../css/App.css';

export default class App extends Component {
  state = {
    title: 'React',
    subtitle: 'Make-up Quiz'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title, subtitle } = this.state;
    return (
      <>
        <h1>REACT MAKE-UP!</h1>
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

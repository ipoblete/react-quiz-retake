import React, { Component } from 'react';
import Controls from '../components/Controls';
import Display from './Display';

class App extends Component {

  state = {
    title: '',
    subtitle: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ title, subtitle });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title, subtitle } = this.state;
    return (
      <>
      <h1>Enter Text</h1>
      <Controls 
        title={title}
        subtitle={subtitle}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
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
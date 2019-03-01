import React, { PureComponent } from 'react';
import Controls from './Controls';
import Display from './Display';

export default class App extends PureComponent {
  state= {
    titles: [],
    // title: '',
    // subtitle: ''
  };
  handleChange = ({ title }) => {
    this.setState(state => ({
      titles: [...state.titles, title]
    }));
  };
  //   this.setState({ [title.name]: target.value });
  // }

  render() {
    return (
      <>
      <h1>React Quiz</h1>
        <Controls />
        <Display titles={this.state.titles} />
      </>
    )
  }
}


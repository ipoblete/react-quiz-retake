import React, { PureComponent} from 'react';


export default class App extends PureComponent {
  state = {
    title: '',
    subtitle: ''
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, subtitle } = this.state;

    return (
      <>
        <Controls 
          title={title}
          subtitle={subtitle}
          onChange={this.onChange}
        />
      </>  
    );
  }
}


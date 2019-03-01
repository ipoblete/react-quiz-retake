import React from 'react';
import PropTypes from 'prop-types';


function Controls({ title, subtitle }) {

  return (
    <form onSubmit={this.handleSubmit}>
    Title name:
      <input type='text' name="title" value={title} onChange={this.handleChange} />
    Subtitle:
      <input type="text" name="subtitle" value={subtitle} onChange={this.handleChange} />
    Submit Text:
      <input type="submit" value="submit" onChange={this.state.handleChange} />
    </form>
  );
}
Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Controls;

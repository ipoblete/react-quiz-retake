import React from 'react';
import PropTypes from 'prop-types';


function Controls({ title, subtitle, onChange, onSubmit }) {

  return (
    <form onSubmit={onSubmit}>
    Title name:
      <input type='text' name="title" value={title} onChange={onChange} />
    Subtitle:
      <input type="text" name="subtitle" value={subtitle} onChange={onChange} />
    Submit Text:
      <button type="submit">Submit</button>
    </form>
  );
}
Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Controls;

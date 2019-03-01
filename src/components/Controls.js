import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
    <input type="text" name="title" vslue={title} onChange={onChange} />
    <input type="text" name="subtitle" vslue={subtitle} onChange={onChange} />
    <button type="submit">Save</button>
    </form>
  );
}

Controls.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string
};

export default Controls;

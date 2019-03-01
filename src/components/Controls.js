import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle, onChange }) {
  return (
    <form>
      <input name="title" text={title} onChange={onChange} />
      <input name="subtitle" text={subtitle} onChange={onChange} />
    </form>
  );
}

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;

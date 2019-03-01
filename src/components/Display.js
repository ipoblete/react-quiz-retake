import React from 'react';
import PropTypes from 'prop-types';

function Display({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
Display.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Display;
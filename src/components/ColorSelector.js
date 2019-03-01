import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ color, backgroundColor, onChange }) {
  return (
    <>
      <input type="color" name="color" value={color} onChange={onChange} />
      <input type="color" name="backgroundColor" value={backgroundColor} onChange={onChange} />
    </>
  );
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorSelector;

import React from 'react';
import PropTypes from 'prop-types';

function Title({ title }) {
  return (
    <p>{title}</p>
  );
}
Title.propTypes = {
  title: PropTypes.string
};

export default Title;

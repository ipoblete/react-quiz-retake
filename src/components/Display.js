import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import styles from '../css/Display.css';

function Display({ title, subtitle }) {
  return (
    <div className={styles.display}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

Display.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Display;

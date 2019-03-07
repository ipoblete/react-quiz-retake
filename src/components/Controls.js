import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import styles from '../css/Controls.css';

function Controls({ title, subtitle, onChange }) {
  return (
    <form className={styles.form}>
      <label className={styles.title}>Title:</label>
      <input type="text" name="title" value={title} onChange={onChange}/>
      <label className={styles.subtitle}>Subtitle:</label>
      <input type="text" name="subtitle" value={subtitle} onChange={onChange}/>
    </form>
  );
}

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;

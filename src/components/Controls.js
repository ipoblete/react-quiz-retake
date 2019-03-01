import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle, onChange }) {
  return (
    <form>
      <h1> Title
        <input type="text" name="title" value={title} onChange={onChange} />
      </h1>
      <h2> Subtitle
        <input type="text" name="subtitle" value={subtitle} onChange={onChange} />
      </h2>
      <button>Add</button>
    </form>
  );
}
Controls.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onChange: PropTypes.func
};

export default Controls;

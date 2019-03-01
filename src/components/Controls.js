import React from 'react';
import PropTypes from 'prop-types';


function Controls({ title, subtitle, onChange }) {
  return (
    <form >
      <label>Title Text:</label>
      <TextControls name="title" text={title} onChange={onChange}/>
      <label>Subtitle Text:</label>
      <TextControls name="subtitle" text={subtitle} onChange={onChange}/>
    </form>
  );
}

Controls.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onChange: PropTypes.func,

};

function TextControls({ name, onChange, text }) {
  return (
      <>
      <input type="text" name={name} value={text} onChange={onChange} />
   
      </>
  );
}
TextControls.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.string
};

export default Controls;

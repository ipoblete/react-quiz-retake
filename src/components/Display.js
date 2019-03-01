import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

function Display({ titles }) {
  const listOfTitles = titles.map(title => {
    return (
      <li key={title.name}>
        <Title title={title} value={title} />
      </li>
    );
  });
  return (
    <ul>
      {listOfTitles}
    </ul>
  );
}
Display.propTypes = {
  titles: PropTypes.array.isRequired
};

export default Display;


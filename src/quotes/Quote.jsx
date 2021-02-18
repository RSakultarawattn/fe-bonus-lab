import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ content }) => (
  <figure>
    
    <p>{content}</p>

  </figure>
);

Quote.propTypes = {
  content: PropTypes.string.isRequired
};

export default Quote;

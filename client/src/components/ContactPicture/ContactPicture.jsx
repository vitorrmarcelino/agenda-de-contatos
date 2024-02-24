import React from 'react';
import './ContactPicture.css';
import propTypes from 'prop-types';
import firstLetter from '../../util/firstLetter';

export default function ContactPicture({ name, className }) {
  return (
    <div className={`contact-picture ${className}`}>
      <span>
        {firstLetter(name)}
      </span>
    </div>
  );
}

ContactPicture.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

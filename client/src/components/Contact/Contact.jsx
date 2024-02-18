import React from 'react';
import propTypes from 'prop-types';
import './Contact.css';
import firstLetter from '../../util/firstLetter';

export default function Contact({ data }) {
  const {
    name, lastname,
  } = data;
  return (
    <div className="contact-card">
      <div className="contact-picture">
        <span>
          {firstLetter(name)}
        </span>
      </div>
      <span className="contact-name">
        {name}
        {' '}
        {lastname}
      </span>
    </div>
  );
}

Contact.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

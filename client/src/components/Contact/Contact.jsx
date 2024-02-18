import React from 'react';
import propTypes from 'prop-types';
import './Contact.css';

export default function Contact({ data }) {
  const {
    name, lastname, email, number,
  } = data;
  console.log(data);
  return (
    <div className="contact-card">
      <p>
        {name}
      </p>
      <p>
        {lastname}
      </p>
      <p>
        {email}
      </p>
      <p>
        {number}
      </p>
    </div>
  );
}

Contact.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

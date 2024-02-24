import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './Contact.css';
import ContactPicture from '../ContactPicture/ContactPicture';

export default function Contact({ data }) {
  const {
    name, lastname, id,
  } = data;
  return (
    <Link to={`/contact/${id}`} className="contact-link">
      <div className="contact-card">
        <ContactPicture name={name} />
        <span className="contact-name">
          {name}
          {' '}
          {lastname}
        </span>
      </div>
    </Link>
  );
}

Contact.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

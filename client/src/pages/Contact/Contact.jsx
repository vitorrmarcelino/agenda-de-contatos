import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Pencil } from 'lucide-react';
import './Contact.css';
import api from '../../api/api';
import ContactPicture from '../../components/ContactPicture/ContactPicture';

export default function Contact() {
  const { contactId } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getContactData = async () => {
      try {
        const response = await api.get(`contacts/${contactId}`);
        setContact(response.data);
      } catch (error) {
        navigate('/not-found');
      }
    };
    getContactData();
  }, []);

  return (
    <div className="contact-container">
      <div className="center">
        {contact
          && <ContactPicture name={contact.name} className="big-contact-picture" />}
        {contact && <h1>{`${contact.name} ${contact.lastname}`}</h1>}
      </div>
      <h2>Informações de contato:</h2>
      {(contact && contact.email) && (
      <div>
        <h3>E-mail:</h3>
        <p>{contact.email}</p>
      </div>
      )}
      {(contact && contact.number) && (
      <div>
        <h3>Telefone:</h3>
        <p>{contact.number}</p>
      </div>
      )}
      <Link to="/">
        <ChevronLeft className="back-icon icon" />
      </Link>
      <Link to={`/contact/edit/${contactId}`}>
        <Pencil className="pencil-icon icon" />
      </Link>
    </div>
  );
}

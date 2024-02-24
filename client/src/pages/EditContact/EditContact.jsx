import React, { useState, useEffect } from 'react';
import './EditContact.css';
import { Check, X } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../api/api';

export default function AddContact() {
  const { contactId } = useParams();
  const [contact, setContact] = useState(null);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getContactData = async () => {
      try {
        const response = await api.get(`contacts/${contactId}`);
        setContact(response.data);
      } catch (err) {
        navigate('/not-found');
      }
    };
    getContactData();
  }, []);

  useEffect(() => {
    if (contact) {
      setName(contact.name || '');
      setLastname(contact.lastname || '');
      setEmail(contact.email || '');
      setNumber(contact.number || '');
    }
  }, [contact]);

  const handleEditContact = async (e) => {
    e.preventDefault();

    try {
      await api.put('contacts', {
        contact_id: contactId, name, lastname, email, number,
      });

      navigate(`/contact/${contactId}`);
    } catch (err) {
      setError(err.response.data.msg);
    }
  };

  return (
    <div className="add-contact-container">
      <div className="form-container">
        <Link to="/">
          <X className="x-icon" />
        </Link>
        <Check className="check-icon" onClick={handleEditContact} />
        <form className="add-form">
          <input type="text" placeholder="Nome" className="add-input" value={name} onChange={(e) => [setName(e.target.value), setError('')]} />
          <input type="text" placeholder="Sobrenome" className="add-input" value={lastname} onChange={(e) => [setLastname(e.target.value), setError('')]} />
          <input type="text" placeholder="E-mail" className="add-input" value={email} onChange={(e) => [setEmail(e.target.value), setError('')]} />
          <input type="text" placeholder="Telefone" className="add-input" value={number} onChange={(e) => [setNumber(e.target.value), setError('')]} />
        </form>
      </div>
      <p className="error-text">{error}</p>
    </div>
  );
}

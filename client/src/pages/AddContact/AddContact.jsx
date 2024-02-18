import React, { useState } from 'react';
import './AddContact.css';
import { Check, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';

export default function AddContact() {
  const [name, setName] = useState('');
  const [lastname, setLastame] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleAddContact = async (e) => {
    e.preventDefault();

    try {
      await api.post('contacts', {
        name, lastname, email, number,
      });

      navigate('/');
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
        <Check className="check-icon" onClick={handleAddContact} />
        <form className="add-form">
          <input type="text" placeholder="Nome" className="add-input" value={name} onChange={(e) => [setName(e.target.value), setError('')]} />
          <input type="text" placeholder="Sobrenome" className="add-input" value={lastname} onChange={(e) => [setLastame(e.target.value), setError('')]} />
          <input type="text" placeholder="E-mail" className="add-input" value={email} onChange={(e) => [setEmail(e.target.value), setError('')]} />
          <input type="text" placeholder="Telefone" className="add-input" value={number} onChange={(e) => [setNumber(e.target.value), setError('')]} />
        </form>
      </div>
      <p className="error-text">{error}</p>
    </div>
  );
}

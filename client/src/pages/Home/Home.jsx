import React, { useEffect, useState } from 'react';
import Contact from '../../components/Contact/Contact';
import Menu from '../../components/Menu/Menu';
import api from '../../api/api';
import './Home.css';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const response = await api.get('contacts');
      setContacts(response.data);
    };
    getContacts();
  }, []);
  return (
    <div>
      <div className="contacts">
        {contacts.map((contact) => <Contact key={contact.id} data={contact} />)}
      </div>
      <Menu />
    </div>
  );
}

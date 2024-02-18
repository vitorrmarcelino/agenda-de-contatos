import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { AuthContext } from '../../context/auth';
import './Register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      await api.post('users/register', {
        name, email, password, confirmpassword,
      });

      await login(email, password);

      navigate('/');
    } catch (err) {
      setError(err.response.data.msg);
    }
  };

  return (
    <section className="register-section">
      <div className="register-container">
        <h2 className="register-title">Crie sua conta</h2>
        <form className="register-form" onSubmit={handleCreateUser}>
          <label htmlFor="name">
            <p>Nome de usuário</p>
            <input type="text" id="name" name="name" value={name} onChange={(e) => [setName(e.target.value), setError('')]} />
          </label>
          <label htmlFor="email">
            <p>E-mail</p>
            <input type="email" name="email" id="email" value={email} onChange={(e) => [setEmail(e.target.value)]} />
          </label>
          <label htmlFor="password">
            <p>Senha</p>
            <input type="password" id="password" name="password" value={password} onChange={(e) => [setPassword(e.target.value), setError('')]} />
          </label>
          <label htmlFor="confirmpassword">
            <p>Confirme sua senha</p>
            <input type="password" id="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={(e) => [setConfirmpassword(e.target.value), setError('')]} />
          </label>
          <p className="register-text">{error}</p>
          <p className="register-text">
            Já tem uma conta?
            <Link to="/login"> Entrar</Link>
          </p>
          <button className="register-button" type="submit">
            <p>CRIAR</p>
          </button>
        </form>
      </div>
    </section>
  );
}

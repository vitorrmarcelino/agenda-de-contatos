import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../context/auth';

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response.data.msg);
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="login-title">Bem vindo de volta</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">
            <p>E-mail</p>
            <input type="email" id="email" name="email" value={email} onChange={(e) => [setEmail(e.target.value), setError('')]} />
          </label>
          <label htmlFor="password">
            <p>Senha</p>
            <input type="password" id="password" name="password" value={password} onChange={(e) => [setPassword(e.target.value), setError('')]} />
          </label>
          <p className="login-text">{error}</p>
          <p className="login-text">
            Não tem uma conta?
            <Link to="/register"> Registre-se</Link>
          </p>
          <button type="submit" className="login-button">
            <p>ENTRAR</p>
          </button>
        </form>
      </div>
    </section>
  );
}

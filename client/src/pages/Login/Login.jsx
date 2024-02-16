import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="login-title">Bem vindo de volta</h2>
        <form className="login-form">
          <label htmlFor="email">
            <p>E-mail</p>
            <input type="email" id="email" name="email" />
          </label>
          <label htmlFor="password">
            <p>Senha</p>
            <input type="text" id="password" name="password" />
          </label>
        </form>
        <p className="login-text">
          Não tem uma conta?
          <a href="/register"> Registre-se</a>
        </p>
        <a href="/" className="login-button">
          <p>ENTRAR</p>
        </a>
      </div>
    </section>
  );
}

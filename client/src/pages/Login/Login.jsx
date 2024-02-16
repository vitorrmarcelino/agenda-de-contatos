import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="login-title">Bem vindo de volta</h2>
        <form className="login-form">
          <p>E-mail</p>
          <input type="text" />
          <p>Senha</p>
          <input type="text" />
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

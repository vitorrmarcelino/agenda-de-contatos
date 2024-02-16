import React from 'react';
import './Register.css';

export default function Register() {
  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="login-title">Crie sua conta</h2>
        <form className="login-form">
          <p>Nome de usuário</p>
          <input type="text" />
          <p>E-mail</p>
          <input type="text" />
          <p>Senha</p>
          <input type="text" />
          <p>Confirme sua senha</p>
          <input type="text" />
        </form>
        <p className="login-text">
          Já tem uma conta?
          <a href="/login"> Entrar</a>
        </p>
        <a href="/" className="login-button">
          <p>CRIAR</p>
        </a>
      </div>
    </section>
  );
}
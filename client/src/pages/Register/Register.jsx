import React from 'react';
import './Register.css';

export default function Register() {
  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="login-title">Crie sua conta</h2>
        <form className="login-form">
          <label htmlFor="name">
            <p>Nome de usuário</p>
            <input type="text" id="name" name="name" />
          </label>
          <label htmlFor="email">
            <p>E-mail</p>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <p>Senha</p>
            <input type="password" id="password" name="confirmpassword" />
          </label>
          <label htmlFor="confirmpassword">
            <p>Confirme sua senha</p>
            <input type="password" id="confirmpassword" name="confirmpassword" />
          </label>
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

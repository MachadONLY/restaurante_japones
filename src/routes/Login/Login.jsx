import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import "../Login/Login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useOutletContext();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      setUser(username);
      navigate('/');
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  const handleLogout = () => {
    setUser(null); 
    setUsername('');
    setPassword(''); 
    navigate('/'); 
  };

  return (
    <div className="login-container">
      <div className="login-section">
        {user ? (
          <>
            <h1 className="login-title">Você já está logado, {user}!</h1>
            <button className="logout-button" onClick={handleLogout}>Sair</button>
          </>
        ) : (
          <>
            <h1 className="login-title">Bem-vindo ao Restaurante Japonês</h1>
            <form className="login-form" onSubmit={handleLogin}>
              <label htmlFor="username" className="login-label">Usuário:</label>
              <input
                type="text"
                id="username"
                className="login-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
              />

              <label htmlFor="password" className="login-label">Senha:</label>
              <input
                type="password"
                id="password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />

              <button type="submit" className="login-button">Entrar</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;

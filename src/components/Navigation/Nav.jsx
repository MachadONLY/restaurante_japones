import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import '../Navigation/Nav.css';

function Nav({ user }) {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/login">Login</Link></li>
        {user && (
          <li className="user-profile">
            <FaUserCircle className="profile-icon" />
            <span>Bem-vindo, {user}!</span>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;

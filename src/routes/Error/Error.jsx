import React from 'react';
import { FaFish } from 'react-icons/fa';
import './Error.css';

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-title">404 - Not Found</h1>
      <p className="error-message">Oops! Parece que você se perdeu no menu.</p>
      <FaFish className="sushi-icon" />
      <p className="error-suggestion">Volte para a <a href="/">página inicial</a>.</p>
    </div>
  );
}

export default Error;

// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

function ErrorPage() {
  return (
    <div className="error-page">
      <h2 className="error-page__404">404</h2>
      <h3>Página no encontrada</h3>
      <p>Lo sentimos, no hemos podido encontrar la página que buscabas.</p>
      <p><Link to="/home">Regresa al Home</Link> o selecciona otra opción en la barra de navegación.</p>
    </div>
  );
}

export default ErrorPage;
import React from 'react';


const HomePage = () => {
  return (
    <div className="landing-page">

      <nav className="navbar">
        <h1 className="navbar-title">Gestión de Turnos - Municipalidad</h1>
        <ul className="navbar-links">
          <li>
            <a href="/registro">Registrarse</a>
          </li>
          <li>
            <a href="/login">Iniciar sesión</a>
          </li>
          <li>
            <a href="/crearTurno">Reservar turno</a>
          </li>
        </ul>
      </nav>

   
      <section className="hero">
        <div className="hero-text">
          <h2>Bienvenido al sistema de gestión de turnos de la municipalidad</h2>
          <p>¡Realiza tus trámites de manera rápida y sencilla desde aquí!</p>
        </div>
        <div className="hero-image">
          <img
            src="muni.png"
            alt="Municipalidad"
            className="hero-img"
          />
        </div>
      </section>

 
      <footer className="footer">
        <p>&copy; 2024 Municipalidad - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default HomePage;

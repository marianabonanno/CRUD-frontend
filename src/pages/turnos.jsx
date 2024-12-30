import React, { useState, useEffect } from "react";
import "../index.css"; 
import { fetchTurnos } from "../api/turnos.js"; 
import { Link } from "react-router-dom";

function Turnos() {
  const [turnos, setTurnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const getTurnos = async () => {
      try {
        const result = await fetchTurnos();
        setTurnos(result);
        setLoading(false);
      } catch (err) {
        console.error("Error al obtener los turnos:", err);
        setError("No se pudieron cargar los turnos. Intenta nuevamente.");
        setLoading(false);
      }
    };

    getTurnos();
  }, []);

  return (
    <div>
      <h1>Listado de turnos completos:</h1>
      {loading ? (
        <p>Cargando turnos...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div>
          {turnos.length > 0 ? (
            <ul>
              {turnos.map((turno) => (
                <li key={turno._id}>
                  <strong>Servicio:</strong> {turno.servicio} <br />
                  <strong>Día:</strong> {turno.dia} <br />
                  <strong>Hora:</strong> {turno.hora}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay turnos registrados.</p>
          )}
        </div>
      )}
       <Link to="/crearTurno" className="back-btn">
        <i className="fas fa-arrow-left"></i> Volver Atrás
      </Link>
    </div>
  );
}

export default Turnos;


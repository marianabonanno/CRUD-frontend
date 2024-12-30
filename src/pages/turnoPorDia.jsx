import React, { useState } from "react";
import { fetchTurnosPorDia } from "../api/turnos.js";
import { Link } from "react-router-dom";



function TurnoPorDia() {

    
  const [dia, setDia] = useState(""); 
  const [turnos, setTurnos] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTurnos([]);

    try {
      const result = await fetchTurnosPorDia({ dia }); 
      if (result.length > 0) {
        setTurnos(result);
      } else {
        setError("No hay turnos disponibles para este día.");
      }
    } catch (err) {
      console.error("Error al obtener turnos por día:", err);
      setError("No hay turnos disponibles para este día.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Turnos por Día</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dia">Selecciona un día:</label>
          <input
            type="date"
            id="dia"
            name="dia"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
            required
          />
        </div>
        <button type="submit">Buscar Turnos</button>
      </form>

      {loading && <p>Cargando turnos...</p>}
      {error && <p className="error-message">{error}</p>}

      {turnos.length > 0 && (
        <ul>
          {turnos.map((turno) => (
            <li key={turno._id}>
              <strong>Servicio:</strong> {turno.servicio} <br />
              <strong>Día:</strong> {turno.dia.slice(0, 10)} <br />
              <strong>Hora:</strong> {turno.hora}
            </li>
          ))}
        </ul>
      )}
      <Link to="/crearTurno" className="back-btn">
             <i className="fas fa-arrow-left"></i> Volver Atrás
           </Link>
    </div>
  );
}

export default TurnoPorDia;

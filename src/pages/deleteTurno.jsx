import React, { useState } from "react";
import { fetchDeleteTurno } from "../api/turnos.js"; 
import { Link } from "react-router-dom";

function EliminarTurno() {
  const [dia, setDia] = useState(""); 
  const [hora, setHora] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 

  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const result = await fetchDeleteTurno({ dia, hora }); 
      setMessage(result.message); 
    } catch (err) {
      console.error("Error al eliminar turno:", err);
      setError("Hubo un problema al eliminar el turno. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Eliminar Turno</h1>
      <form onSubmit={handleDelete}>
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
        <div>
          <label htmlFor="hora">Hora del turno:</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>
        <button type="submit">Eliminar Turno</button>
      </form>

      {loading && <p>Cargando...</p>}
      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}
      <Link to="/crearTurno" className="back-btn">
        <i className="fas fa-arrow-left"></i> Volver Atrás
      </Link>
    </div>
  );
}

export default EliminarTurno;

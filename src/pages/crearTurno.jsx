import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { createTurno } from "../api/turnos.js"; 

function CrearTurno() {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dia = formData.get("dia").trim();
    const hora = formData.get("hora").trim();
    const servicio = formData.get("servicio");


    const newErrors = {};

    if (!dia) {
      newErrors.dia = "El día es obligatorio.";
    }

    if (!hora) {
      newErrors.hora = "La hora es obligatoria.";
    }

    if (!servicio) {
      newErrors.servicio = "El servicio es obligatorio.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSuccessMessage("");

    try {
      const result = await createTurno({ dia, hora, servicio });

      if (result) {
        setSuccessMessage("Turno creado exitosamente.");
        e.target.reset(); 
      } else {
        setErrors({ general: "No se pudo crear el turno. Intenta nuevamente." });
      }
    } catch (error) {
      console.error("Error al crear el turno:", error);
      setErrors({ general: "Ocurrió un error inesperado. Intenta nuevamente." });
    }
  };

  return (
    <div>
      <h1>Crear Turno</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Día:</label>
          <input type="date" name="dia" />
          {errors.dia && <p className="error-message">{errors.dia}</p>}
        </div>
        <div>
          <label>Hora:</label>
          <input type="time" name="hora" />
          {errors.hora && <p className="error-message">{errors.hora}</p>}
        </div>
        <div>
          <label>Servicio:</label>
          <select name="servicio" defaultValue="">
            <option value="" disabled>
              Selecciona un servicio
            </option>
            <option value="Renovación de DNI">Renovación de DNI</option>
            <option value="Licencia de Conducir">Licencia de Conducir</option>
            <option value="Trámites de Vivienda">Trámites de Vivienda</option>
            <option value="Pago de Impuestos">Pago de Impuestos</option>
            <option value="Certificados de Nacimiento">Certificados de Nacimiento</option>
          </select>
          {errors.servicio && <p className="error-message">{errors.servicio}</p>}
        </div>
        {errors.general && <p className="error-message">{errors.general}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button type="submit">Crear Turno</button>
      </form>
      <Link to="/" className="back-btn">
        <i className="fas fa-arrow-left"></i> Volver Atrás
      </Link>
      <div className="navigation-buttons">
        <Link to="/turnos" className="btn">Mostrar todos los turnos</Link>
        <Link to="/turnosPorDia" className="btn">Buscar turnos por día</Link>
        <Link to="/borrarTurno" className="btn">Borrar turno</Link>
      </div>
    </div>
    
  );
}

export default CrearTurno;
export const createTurno = async ({ dia, hora, servicio }) => {
    const API = "https://crud-backend-u65g.onrender.com"; 
  
    try {
      const response = await fetch(`${API}/turnos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dia, hora, servicio }),
      });
  
      if (!response.ok) {
        throw new Error("Error en la creación del turno.");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error en la API de turnos:", error);
      throw error;
    }
  };


  export const fetchTurnos = async () => {
    const API = "https://crud-backend-u65g.onrender.com";
    try {
      const response = await fetch(`${API}/turnos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Error al obtener los turnos");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener los turnos:", error);
      throw error;
    }
  };
  
  export const fetchTurnosPorDia = async ({ dia }) => {
    const API = "https://crud-backend-u65g.onrender.com"; 
  
  try {
    const response = await fetch(`${API}/turnosPorDia`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dia }),
    });
  
    if (!response.ok) {
      throw new Error("Error al obtener turnos");
    }
  
    const data = await response.json();
    return data; 
  } catch (err) {
    console.error("Error al buscar el turno:", err);
    throw err;
  }
  };
    
  
  
  export const fetchDeleteTurno = async ({ dia, hora }) => {
    const API = "https://crud-backend-u65g.onrender.com"; 
    
    try {
      const response = await fetch(`${API}/turnos`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dia, hora }), 
      });
  
      if (!response.ok) {
        throw new Error("Error al eliminar el turno");
      }
  
      return await response.json(); 
    } catch (err) {
      console.error("Error al eliminar turno:", err);
      throw err;
    }
  };
  

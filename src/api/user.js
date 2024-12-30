export const registrarUsuario = async (userData) => {
    const API = 'https://crud-backend-u65g.onrender.com';
  
    try {
      const registroPost = await fetch(`${API}/registro`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (registroPost.ok) {
        const responseData = await registroPost.json();
        console.log('Usuario registrado:', responseData);
        return { success: true, data: responseData }; // Devuelve un objeto indicando éxito
      } else {
        const errorData = await registroPost.json();
        return { success: false, message: errorData.message || "Error en el registro" }; // Devuelve el error
      }
    } catch (error) {
      return { success: false, message: "No se pudo conectar con el servidor. Intenta nuevamente." };
    }
  };


  export const loginUsuario = async (userData) => {
    const API = 'https://crud-backend-u65g.onrender.com';
  
    try {
      const registroPost = await fetch(`${API}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (registroPost.ok) {
        const responseData = await registroPost.json();
        console.log('Iniciaste sesión', responseData);
        localStorage.setItem('token', responseData.token);
        return { success: true, data: responseData }; 
      } else {
        const errorData = await registroPost.json();
        return { success: false, message: errorData.message || "Error al iniciar sesión" }; // Devuelve el error
      }
    } catch (error) {
      return { success: false, message: "No se pudo conectar con el servidor. Intenta nuevamente." };
    }
  };

//   export const permisos = async () => {
//     const API = 'http://localhost:3000';
    
//     try {
  
//         const response = await fetch(`${API}/permisos`, {
//             method: 'GET',
//         });
        
//         const data = await response.json();
//         console.log('Validación del token:', data);

 
//         const estadoAutenticacion = data.success ? 'true' : 'false';
//         localStorage.setItem('isAuthenticated', estadoAutenticacion);
//         return estadoAutenticacion;
//     } catch (error) {
//         console.error('Error al validar el token:', error);
//         localStorage.setItem('isAuthenticated', 'false');
//         return 'false';
//     }
// };


// import React, { createContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState('false'); // Estado inicial como string

//   useEffect(() => {
//     // Recupera el estado de autenticación desde localStorage
//     const authState = localStorage.getItem('isAuthenticated') || 'false';
//     setIsAuthenticated(authState);

//     // Si el usuario está autenticado, valida el token
//     if (authState === 'true') {
//       const token = localStorage.getItem('token');
//       if (token) {
//         fetch('http://localhost:3000/permisos', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         })
//           .then(response => response.json())
//           .then(data => {
//             if (!data.success) {
//               setIsAuthenticated('false'); // Actualiza el estado si el token no es válido
//               localStorage.setItem('isAuthenticated', 'false');
//             }
//           })
//           .catch(() => {
//             setIsAuthenticated('false'); // En caso de error, marca como no autenticado
//             localStorage.setItem('isAuthenticated', 'false');
//           });
//       } else {
//         setIsAuthenticated('false');
//       }
//     }
//   }, []);

//   const login = (token) => {
//     localStorage.setItem('token', token);
//     localStorage.setItem('isAuthenticated', 'true');
//     setIsAuthenticated('true');
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.setItem('isAuthenticated', 'false');
//     setIsAuthenticated('false');
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

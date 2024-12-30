// import React, { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { permisos } from './api/user.js'; 

// const RutasProtegidas = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true); 
//   const [isAuthenticated, setIsAuthenticated] = useState('false');

//   useEffect(() => {
//     const validarPermisos = async () => {
//       setIsLoading(true); 
//       const estado = await permisos(); 
//       setIsAuthenticated(estado); 
//       setIsLoading(false); 

//     validarPermisos();
//   }, []);

//   if (isLoading) {
   
//     return <div>Cargando...</div>;
//   }

  
//   if (isAuthenticated !== 'true') {
//     console.log('No autenticado, redirigiendo a login...');
//     return <Navigate to="/login" replace />;
//   }


//   return children;
// };


// export default RutasProtegidas;

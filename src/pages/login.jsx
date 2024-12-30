import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../index.css";
import {loginUsuario}  from '../api/user.js'


function PaginaLogin(){


     const [errors, setErrors] = useState({}); 
     const navigate = useNavigate(); 
    
        const handleSubmit = async (e) => {
            e.preventDefault(); 
    
     
            const formData = new FormData(e.target);
            const email = formData.get("email").trim();
            const password = formData.get("password").trim();
    
      
            const newErrors = {};
   
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                newErrors.email = "El correo electrónico no es válido";
            }
    
            if (password.length < 6) {
                newErrors.password = "Contraseña incorrecta";
            }
    
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }
    
            setErrors({});
    
            try {
                const result = await loginUsuario({ email, password });
    
                if (result.success) {
                    alert("Sesión iniciada");
                    navigate("/turnos");
                } else {
                    setErrors({ general: result.message });
                }
            } catch (error) {
                console.error("Error al iniciar sesión:", error);
                setErrors({ general: "Ocurrió un error inesperado. Intenta nuevamente." });
            }
        };
    
    return(
        <div>
            <h1>Inicio de sesión</h1>
             <form onSubmit={handleSubmit}>
                <div>
                    <label>Correo Electrónico:</label>
                    <input type="email" name="email" placeholder="Correo Electrónico" />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" name="password" placeholder="Contraseña" />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                {errors.general && <p className="error-message">{errors.general}</p>}
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default PaginaLogin
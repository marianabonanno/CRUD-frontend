import React, { useState } from "react";
import "../index.css";
import {registrarUsuario}  from '../api/user.js'
import { useNavigate } from "react-router";





function PaginaRegistro() {

    const [errors, setErrors] = useState({}); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 

       
        const formData = new FormData(e.target);
        const nombre = formData.get("nombre").trim();
        const apellido = formData.get("apellido").trim();
        const email = formData.get("email").trim();
        const password = formData.get("password").trim();

   
        const newErrors = {};


        if (!nombre) {
            newErrors.nombre = "El nombre es obligatorio";
        }

        if (!apellido) {
            newErrors.apellido = "El apellido es obligatorio";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = "El correo electrónico no es válido";
        }

        if (password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres";
        }

    
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }


        setErrors({});

  
        try {
            const result = await registrarUsuario({ nombre, apellido, email, password });

            if (result.success) {
                alert("Registro exitoso");
                navigate("/login");
            } else {
                setErrors({ general: result.message });
            }
        } catch (error) {
            console.error("Error en el registro:", error);
            setErrors({ general: "Ocurrió un error inesperado. Intenta nuevamente." });
        }
    };

    return (
        <div>
            <h1>Formulario de Registro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" placeholder="Nombre" />
                    {errors.nombre && <p className="error-message">{errors.nombre}</p>}
                </div>
                <div>
                    <label>Apellido:</label>
                    <input type="text" name="apellido" placeholder="Apellido" />
                    {errors.apellido && <p className="error-message">{errors.apellido}</p>}
                </div>
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
                <button type="submit">Registrar</button>
            </form>

             
        </div>
    );
}
export default PaginaRegistro
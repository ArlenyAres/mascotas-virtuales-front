import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { register } from "../services/authService";

export const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleRegister = async () => {
        try {
            await register(username, email, password);
            alert('User registered successfully!!');
            navigate("/login");

            } catch (error) {
                console.error('register error',error);
            }
    }


    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>I LOVE REGISTER</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleRegister} style={styles.button}>Register</button>
        </div>
    );
};


const styles = {
    container: {
        backgroundColor: "#ffffff",
        color: "#000000",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    heading: {
        fontSize: "4.5rem",
        marginBottom: "2rem",
    },
    input: {
        width: "80%",
        padding: "15px",
        fontSize: "1.2rem",
        marginBottom: "1rem",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
        backgroundColor: "#212529", // Fondo oscuro, similar al diseño
        color: "#fff", // Texto blanco
        border: "none", // Sin borde
        borderRadius: "10px", // Bordes ligeramente redondeados
        padding: "15px 100px", // Más espaciado para hacer los botones más largos
        fontSize: "1.2rem", // Tamaño de fuente más grande
        cursor: "pointer", // Cambia el cursor al pasar sobre el botón
        margin: "15px 0", // Margen entre los botones
        width: "80%", // Ancho para que coincida con el diseño
        maxWidth: "300px", // Ancho máximo para pantallas más grandes
        textAlign: "center", // Asegura que el texto esté centradorgin: "10px 0",
    },
};
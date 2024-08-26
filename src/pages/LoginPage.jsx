import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {login} from "../services/authService"
import FlechaIzquierda from "../assets/FlechaIzquierda.svg"

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await login(username,password);
            navigate('/user-menu');
        }catch (error) {
            console.error('login errror', error);
        }

};
    return(
        <div style={styles.container}>
            <h1 style={styles.heading}>I LOVE <br></br>LOGGING </h1>
            
            <input 
            type="text" 
            placeholder="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value
            )} style={styles.input}
            />

            <input 
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            />
            
            <button onClick={handleLogin} style={styles.button}>Login</button>

            <div
                style={styles.backContainer}
                onClick={() => navigate('/home')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={FlechaIzquierda}
                    alt="Back"
                    style={isHovered ? { ...styles.arrow, ...styles.arrowHover } : styles.arrow}
                />
                <span style={styles.backText}>HOME</span>
            </div>

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
        textAlign: "center", // Asegura que el texto esté centrado
    },
    backContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: "40px",
        cursor: "pointer",
        gap: "1rem",
    },
    backText: {
        fontSize: "2.5rem",
        marginTop: "2rem"
    },
    arrow: {
        width: "50px",
        height: "auto",
        transition: "transform 0.3s ease",
        marginTop: "2rem"
    },
    arrowHover: {
        transform: "scale(1.2)",
    },
};
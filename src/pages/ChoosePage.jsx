import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import FlechaIzquierda from "../assets/FlechaIzquierda.svg"

export const ChoosePage = () =>{
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);


    return(
        <div style={styles.container}>
            <h1 style={styles.heading}>I LOVE <br></br> CHOOSE</h1>
            <button
                style={styles.button}
                onClick={() => navigate('/register')}
            >
                Register
            </button>
            <button
                style={styles.button}
                onClick={() => navigate('/login')}
            >
                Login
            </button>
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

    )
};

const styles = {
    container: {
        backgroundColor: "#ffffff",
        color: "#000000",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "3rem",
    },
    heading: {
        fontSize: "4.5rem",
        marginBottom: "2rem",
        marginTop: "10rem",
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
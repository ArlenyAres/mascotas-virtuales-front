import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlechaDerecha from '../assets/Flecha derecha.svg'; // Asegúrate de que la ruta sea correcta

export const HomePage = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>I LOVE <br />PLAYING</h1>
            <p style={styles.paragraph}>I LOVE... IS AN APPLICATION TO TAKE CARE OF VIRTUAL PETS.</p>
            <div
                style={styles.startContainer}
                onClick={() => navigate('/choose')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span style={styles.startText}>START</span>
                <img
                    src={FlechaDerecha}
                    alt="Start"
                    style={isHovered ? { ...styles.arrow, ...styles.arrowHover } : styles.arrow}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: "#ffffff", // Fondo blanco
        color: "#000000", // Texto negro
        height: "100vh", // Asegura que el contenedor cubra toda la altura de la ventana
        display: "flex", // Flexbox para centrar el contenido
        flexDirection: "column", // Organiza el contenido en una columna
        justifyContent: "flex-start", // Alinea el contenido hacia la parte superior
        alignItems: "center", // Centra horizontalmente
        textAlign: "center", // Centra el texto
        paddingTop: "3rem", // Añadir espacio en la parte superior del contenedor si es necesario
    },
    heading: {
        fontSize: "4.5rem", // Tamaño de fuente del encabezado
        marginTop: "10rem", // Espacio superior para ajustar la posición
        marginBottom: "1.5rem", // Ajusta el margen inferior
    },
    paragraph: {
        fontSize: "2.2rem", // Tamaño de fuente del párrafo
        marginBottom: "3rem",
        margin: "1.5rem"
    },
    startContainer: {
        display: "flex", // Alinea el texto y la imagen en una fila
        alignItems: "center", // Alinea verticalmente en el centro
        cursor: "pointer", // Cambia el cursor al pasar sobre la imagen y el texto
        gap: "1rem" // Espacio entre el texto y la imagen
    },
    startText: {
        fontSize: "2.5rem", 
        marginTop: "2rem"
    },
    arrow: {
        width: "50px", // Tamaño de la flecha
        height: "auto", // Mantén la proporción
        transition: "transform 0.3s ease", // Transición suave para el hover
        marginTop: "2rem"
    },
    arrowHover: {
        transform: "scale(1.2)", // Agranda la flecha al hacer hover
    },
};

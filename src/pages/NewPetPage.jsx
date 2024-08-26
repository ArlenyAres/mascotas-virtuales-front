import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlechaDerecha from '../assets/Flecha derecha.svg';
import FlechaIzquierda from '../assets/Flechaizquierda.svg';

export const NewPetPage = () => {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(null);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>I LOVE NEW PETS</h1>
            {['Unicorn', 'Ghost', 'Dragoon', 'Alien'].map((pet, index) => (
                <div
                    key={index}
                    style={styles.menuItem}
                    onClick={() => navigate('/customize-pet', { state: { petType: pet.toLowerCase() } })}
                    onMouseEnter={() => setHovered(pet)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <img
                        src={FlechaDerecha}
                        alt={pet}
                        style={hovered === pet ? { ...styles.arrow, ...styles.arrowHover } : styles.arrow}
                    />
                    <span style={styles.menuText}>{pet.toUpperCase()}</span>
                </div>
            ))}
            <div
                style={styles.backContainer}
                onClick={() => navigate('/user-menu')}
                onMouseEnter={() => setHovered('back')}
                onMouseLeave={() => setHovered(null)}
            >
                <img
                    src={FlechaIzquierda}
                    alt="Back"
                    style={hovered === 'back' ? { ...styles.arrow, ...styles.arrowHover } : styles.arrow}
                />
                <span style={styles.backText}>BACK</span>
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
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "3rem",
    },
    heading: {
        fontSize: "4.5rem",
        marginBottom: "2rem",
    },
    menuItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start", // Alinea a la izquierda
        width: "100%", // Asegura que todos los elementos tengan el mismo ancho
        maxWidth: "300px", // Ancho máximo para centrar el contenido
        margin: "1.5rem 0",
        cursor: "pointer",
    },
    menuText: {
        fontSize: "2.5rem",
    },
    arrow: {
        width: "50px",
        height: "auto",
        transition: "transform 0.3s ease",
    },
    arrowHover: {
        transform: "scale(1.2)",
    },
    backContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start", // Alinea a la izquierda
        width: "100%", // Asegura que todos los elementos tengan el mismo ancho
        maxWidth: "300px", // Ancho máximo para centrar el contenido
        marginTop: "2rem",
        cursor: "pointer",
    },
    backText: {
        fontSize: "2.5rem",
    },
};

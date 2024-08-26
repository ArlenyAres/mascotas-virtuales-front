import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlechaDerecha from '../assets/Flecha derecha.svg';
import FlechaIzquierda from '../assets/Flechaizquierda.svg';

export const UserMenuPage = () => {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(null); // Uso de la misma variable de estado para todas las opciones

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>I LOVE <br /> CHOOSE</h1>
            <div
                style={styles.menuItem}
                onClick={() => navigate('/new-pet')}
                onMouseEnter={() => setHovered('new-pet')}
                onMouseLeave={() => setHovered(null)}
            >
                <img
                    src={FlechaDerecha}
                    alt="New Pet"
                    style={hovered === 'new-pet' ? { ...styles.arrow, ...styles.arrowHover } : styles.arrow}
                />
                <span style={styles.menuText}>NEW PET</span>
            </div>
            <div
                style={styles.menuItem}
                onClick={() => navigate('/my-pets')}
                onMouseEnter={() => setHovered('my-pets')}
                onMouseLeave={() => setHovered(null)}
            >
                <img
                    src={FlechaDerecha}
                    alt="My Pets"
                    style={hovered === 'my-pets' ? { ...styles.arrow, ...styles.arrowHover } : styles.arrow}
                />
                <span style={styles.menuText}>MY PETS</span>
            </div>
            <div
                style={styles.backContainer}
                onClick={() => navigate('/home')}
                onMouseEnter={() => setHovered('back')}
                onMouseLeave={() => setHovered(null)}
            >
                <img
                    src={FlechaIzquierda}
                    alt="Back"
                    style={hovered === 'back' ? { ...styles.arrow, ...styles.arrowHover } : styles.arrow}
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
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "3rem",
    },
    heading: {
        fontSize: "4.5rem",
        marginBottom: "2rem",
        marginTop: "8rem",
    },
    menuItem: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        gap: "1rem",
        margin: "1.5rem 0",
    },
    menuText: {
        fontSize: "2.5rem",
    },
    arrow: {
        width: "50px",
        height: "auto",
        transition: "transform 0.3s ease",
        marginTop: "0.5rem"
    },
    arrowHover: {
        transform: "scale(1.2)",
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
    },
};

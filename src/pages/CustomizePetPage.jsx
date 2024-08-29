import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createMascota } from '../services/api'; 
import FlechaDerecha from '../assets/Flecha derecha.svg';
import FlechaIzquierda from '../assets/FlechaIzquierda.svg';

export const CustomizePetPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(null);
    const [name, setName] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');


    const handleCreatePet = async () => {
        try {
            const colorAsString = backgroundColor.toString();
            const tipoMascota = state.petType.toUpperCase();

            console.log('tipoMascota', tipoMascota);
            console.log('name', name);
            console.log('color', colorAsString);

            
            const nuevaMascota = await createMascota(tipoMascota, name, colorAsString);

            console.log("Nueva mascota creada con id:", nuevaMascota.id);

            navigate('/my-pets');
        } catch (error) {
            console.error('Error creating pet:', error);
        }
    };



    return (
        <div style={{ ...styles.container, backgroundColor }}>
            <h1 style={styles.heading}>I LOVE <br /> CHOOSE</h1>
            <div style={styles.inputContainer}>
                <img src={FlechaDerecha} alt="Name" style={styles.arrowInput} />
                <input
                    type="text"
                    placeholder="Pet Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
            </div>
            <div style={styles.inputContainer}>
                <img src={FlechaDerecha} alt="Color" style={styles.arrowInput} />
                <div style={styles.inputColorContainer}>
                    <label style={styles.colorLabel}>Color</label>
                    <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        style={styles.inputColor}
                    />
                </div>
            </div>
            {/* guardar */}
            <div
                style={styles.menuItem}
                onClick={handleCreatePet}
                onMouseEnter={() => setHovered('save')}
                onMouseLeave={() => setHovered(null)}
            >
                <img
                    src={FlechaDerecha}
                    alt="Save"
                    style={hovered === 'save' ? { ...styles.arrow, ...styles.arrowHover } : styles.arrow}
                />
                <span style={styles.menuText}>SAVE</span>
            </div>
            <div
                style={styles.backContainer}
                onClick={() => navigate('/new-pet')}
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
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    heading: {
        fontSize: "4.5rem",
        marginBottom: "2rem",
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1.5rem",
    },
    input: {
        fontSize: "1.5rem",
        padding: "10px",
        width: "200px",
        textAlign: "center",
        borderRadius: "5px",
        border: "1px solid #ccc",
        color: "#555",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Roboto', sans-serif",
    },
    inputColorContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "200px", // Mismo ancho que el campo de texto
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: "#f9f9f9",
    },
    colorLabel: {
        marginRight: "10px",
        fontSize: "1.5rem",
        color: "#555",
    },
    inputColor: {
        width: "50px",
        height: "50px",
        border: "none",
        cursor: "pointer",
    },
    arrowInput: {
        width: "30px",
        height: "auto",
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
    },
    arrowHover: {
        transform: "scale(1.2)",
    },
    backContainer: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        gap: "1rem",
        marginTop: "2rem",
    },
    backText: {
        fontSize: "2.5rem",
    },
};

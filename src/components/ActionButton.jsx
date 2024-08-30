import React, { useState } from 'react';

export const ActionButton = ({ label, onClick }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            style={hovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span style={styles.label}>{label}</span>
        </button>
    );
};

const styles = {
    button: {
        width: '2.4rem',
        height: '2.4rem',
        borderRadius: '50%',
        border: '0.24rem solid orange',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: 'inset 0 0 0 3px black',
        transition: 'transform 0.3s ease',
    },
    buttonHover: {
        transform: 'scale(1.1)', // Agranda el botón un poco al hacer hover
    },
    label: {
        display: 'none', // Oculta el texto del botón
    },
};

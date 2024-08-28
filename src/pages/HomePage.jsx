import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlechaDerecha from '../assets/Flecha derecha.svg';

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
        marginTop: "10rem",
        marginBottom: "1.5rem", 
    },
    paragraph: {
        fontSize: "2.2rem", 
        marginBottom: "3rem",
        margin: "1.5rem"
    },
    startContainer: {
        display: "flex", 
        alignItems: "center", 
        cursor: "pointer", 
        gap: "1rem" 
    },
    startText: {
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


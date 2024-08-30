import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllMascotas } from '../services/api';
import FlechaDerecha from '../assets/Flecha derecha.svg';
import FlechaIzquierda from '../assets/Flechaizquierda.svg';

export const MyPetsPage = () => {
    const [pets, setPets] = useState([]);
    const [hovered, setHovered] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const mascotas = await getAllMascotas();
                setPets(mascotas);
            } catch (error) {
                console.error('Error fetching pets:', error);
            }
        };
        fetchPets();
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>I LOVE <br /> MY PETS</h1>
            {pets.length > 0 ? (
                pets.map((pet) => (
                    <div
                        key={pet.id}
                        style={styles.menuItem}
                        onClick={() => navigate(`/pet/${pet.id}`)}
                        onMouseEnter={() => setHovered(pet.id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <img
                            src={FlechaDerecha}
                            alt={pet.nombre}
                            style={hovered === pet.id ? { ...styles.arrow, ...styles.arrowHover } : styles.arrow}
                        />
                        <span style={styles.menuText}>{pet.nombre.toUpperCase()}</span>
                    </div>
                ))
            ) : (
                    <p style={styles.p} >No pets available.</p>
            )}
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
        justifyContent: "flex-start",
        width: "100%",
        maxWidth: "300px",
        margin: "1.5rem 0",
        cursor: "pointer",
        gap: "1rem"
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
        justifyContent: "center", 
        gap: "1rem",
        marginTop: "2rem",
        cursor: "pointer",
    },
    backText: {
        fontSize: "2.5rem",
    },
    p: {
        fontSize: "1.9rem",
    }
};



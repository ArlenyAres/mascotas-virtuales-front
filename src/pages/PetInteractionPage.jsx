import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMascotaById, updateMascota, deleteMascota } from '../services/api'; // Importa deleteMascota
import { ProgressBar } from '../components/ProgressBar';
import { ActionButton } from '../components/ActionButton';
import tamagochiFondo from '../assets/tamacogochi fondo.svg';
import alien from "../assets/alien.png"
import dragon from "../assets/dragon.png";
import ghost from "../assets/ghost.png";
import unicorn from "../assets/unicorn.png";
import FlechaIzquierda from "../assets/FlechaIzquierda.svg"

export const PetInteractionPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pet, setPet] = useState(null);
    const [hunger, setHunger] = useState(100);
    const [sleep, setSleep] = useState(100);
    const [love, setLove] = useState(100);
    const [hovered, setHovered] = useState(null);
    const [hoveredDelete, setHoveredDelete] = useState(null); // Estado para manejar el hover en el botón de delete

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const petData = await getMascotaById(id);
                setPet(petData);
                setHunger(petData.nivelHambre);
                setSleep(petData.nivelEnergia);
                setLove(petData.nivelFelicidad);
            } catch (error) {
                console.error('Error fetching pet:', error);
            }
        };
        fetchPet();
    }, [id]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHunger((prev) => Math.max(prev - 12, 0));
            setSleep((prev) => Math.max(prev - 10, 0));
            setLove((prev) => Math.max(prev - 6, 0));
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const handleEat = () => {
        setHunger((prev) => Math.min(prev + 20, 100));
        updatePetStatus();
    };

    const handleSleep = () => {
        setSleep((prev) => Math.min(prev + 20, 100));
        updatePetStatus();
    };

    const handleLove = () => {
        setLove((prev) => Math.min(prev + 20, 100));
        updatePetStatus();
    };

    const updatePetStatus = async () => {
        try {
            await updateMascota(id, {
                nombre: pet.nombre,
                nivelHambre: hunger,
                nivelEnergia: sleep,
                nivelFelicidad: love,
            });
        } catch (error) {
            console.error('Error updating pet status:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteMascota(id);
            navigate('/user-menu'); // Redirige al menú del usuario después de eliminar la mascota
        } catch (error) {
            console.error('Error deleting pet:', error);
        }
    };

    if (!pet) return <div>Loading...</div>;

    const getPetImage = (tipoMascota) => {
        switch (tipoMascota?.toUpperCase()) {
            case 'DRAGOON':
                return dragon;
            case 'UNICORN':
                return unicorn;
            case 'ALIEN':
                return alien;
            case 'GHOST':
                return ghost;
            default:
                return null;
        }
    };

    return (
        <div style={{ ...styles.container, backgroundColor: pet.color }}>
            <div style={styles.petContainer}>
                <h1 style={styles.heading}>{pet.nombre.toUpperCase()}</h1>
                <img src={tamagochiFondo} alt="Tamagochi Fondo" style={styles.tamagochiFondo} />
                <img src={getPetImage(pet.tipoMascota)} alt={pet.nombre} style={styles.petImage} />
            </div>

            <div style={styles.statContainer}>
                <div style={styles.statItem}>
                    <div style={{ flexGrow: 1 }}>
                        <ProgressBar label="EAT" value={hunger} color="green" />
                    </div>
                    <ActionButton label="EAT" onClick={handleEat} />
                </div>
                <div style={styles.statItem}>
                    <div style={{ flexGrow: 1 }}>
                        <ProgressBar label="SLEEP" value={sleep} color="blue" />
                    </div>
                    <ActionButton label="SLEEP" onClick={handleSleep} />
                </div>
                <div style={styles.statItem}>
                    <div style={{ flexGrow: 1 }}>
                        <ProgressBar label="LOVE" value={love} color="pink" />
                    </div>
                    <ActionButton label="LOVE" onClick={handleLove} />
                </div>
            </div>

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

            <div
                style={styles.deleteContainer}
                onClick={handleDelete}
                onMouseEnter={() => setHoveredDelete('delete')}
                onMouseLeave={() => setHoveredDelete(null)}
            >
                <img
                    src={FlechaIzquierda}
                    alt="Delete"
                    style={hoveredDelete === 'delete' ? { ...styles.arrow, ...styles.arrowHover } : styles.arrow}
                />
                <span style={styles.deleteText}>DELETE</span>
            </div>
        </div>
    );
};

const styles = {
    container: {
        color: "#ffffff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        
    },
    petContainer: {
        position: "relative",
        width: "16rem",
        height: "25rem",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2.5rem"

    },
    tamagochiFondo: {
        marginTop: "1rem",
        width: "75vh",
        height: "auto",
        
    },
    petImage: {
        position: "absolute",
        top: "50.5%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "10rem",
        height: "9.2rem",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
        zIndex: "36",

    },
    heading: {
        position: "absolute",
        top: "-5.3rem",
        left: "8.2rem",
        transform: "translate(-50%, -10%)",
        fontSize: "3.5rem",
        zIndex: 1,
        color: "black",
        textStroke : "3px",
        
    },
    statContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
        width: "100%",
        maxWidth: "300px",
        marginBottom: "1rem",
    },
    statItem: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        gap: "1rem",
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
        color: "black",
    },
    deleteContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "1rem",
        cursor: "pointer",
    },
    deleteText: {
        fontSize: "2.5rem",
        color: "Black", 
    },
};

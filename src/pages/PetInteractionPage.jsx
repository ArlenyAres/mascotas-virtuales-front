import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMascotaById, updateMascota } from '../services/api';
import { ProgressBar } from '../components/ProgressBar';
import { ActionButton } from '../components/ActionButton';
import tamagochiFondo from '../assets/tamacogochi fondo.svg';
import alien from "../assets/DALL·E  alien.svg"
import dragon from "../assets/DALL·E dragon.svg";
import ghost from "../assets/DALL·E ghost.svg";
import unicorn from "../assets/DALL·E unicorn.svg";

export const PetInteractionPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pet, setPet] = useState(null);
    const [hunger, setHunger] = useState(100);
    const [sleep, setSleep] = useState(100);
    const [love, setLove] = useState(100);

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
            setHunger((prev) => Math.max(prev - 10, 0));
            setSleep((prev) => Math.max(prev - 10, 0));
            setLove((prev) => Math.max(prev - 10, 0));
        }, 30000);

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

    if (!pet) return <div>Loading...</div>;

    // Seleccionar la imagen de la mascota basada en el tipo
    const getPetImage = (tipo) => {
        switch (tipo) {
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
        <div style={styles.container}>
            <div style={styles.petContainer}>
                <img src={tamagochiFondo} alt="Tamagochi Fondo" style={styles.tamagochiFondo} />
                <img src={getPetImage(pet.tipo)} alt={pet.nombre} style={styles.petImage} />
            </div>
            <h1 style={styles.heading}>{pet.nombre.toUpperCase()}</h1>

            <ProgressBar label="EAT" value={hunger} color="green" />
            <ProgressBar label="SLEEP" value={sleep} color="blue" />
            <ProgressBar label="LOVE" value={love} color="pink" />

            <div style={styles.buttonContainer}>
                <ActionButton label="EAT" onClick={handleEat} />
                <ActionButton label="SLEEP" onClick={handleSleep} />
                <ActionButton label="LOVE" onClick={handleLove} />
            </div>

            <button onClick={() => navigate('/my-pets')} style={styles.backButton}>
                <img src="../assets/Flechalzquierda.svg" alt="Back" style={styles.backIcon} />
                BACK
            </button>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: "#111111",
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
        width: "250px",
        height: "250px",
    },
    tamagochiFondo: {
        width: "100%",
        height: "auto",
    },
    petImage: {
        position: "absolute",
        top: "25%",
        left: "50%",
        transform: "translate(-50%, -25%)",
        width: "100px",
        height: "100px",
    },
    heading: {
        fontSize: "2rem",
        marginTop: "1rem",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        maxWidth: "300px",
        margin: "20px 0",
    },
    backButton: {
        backgroundColor: "transparent",
        color: "#ffffff",
        border: "none",
        fontSize: "1.5rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
    },
    backIcon: {
        marginRight: "10px",
    },
};


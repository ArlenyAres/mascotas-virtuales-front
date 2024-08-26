import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMascotaById, updateMascota } from '../services/mascotaService';
import { ProgressBar } from '../components/ProgressBar';
import { ActionButton } from '../components/ActionButton';

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

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>{pet.nombre}</h1>

            <ProgressBar label="Hunger" value={hunger} color="red" />
            <ProgressBar label="Sleep" value={sleep} color="blue" />
            <ProgressBar label="Love" value={love} color="pink" />

            <div style={styles.buttonContainer}>
                <ActionButton label="Eat" onClick={handleEat} />
                <ActionButton label="Sleep" onClick={handleSleep} />
                <ActionButton label="Love" onClick={handleLove} />
            </div>

            <button onClick={() => navigate('/my-pets')} style={styles.button}>Back</button>
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
    buttonContainer: {
        display: "flex",
        gap: "15px",
    },
    button: {
        backgroundColor: "#212529",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "15px 30px",
        fontSize: "1.5rem",
        cursor: "pointer",
        margin: "20px 0",
    },
};

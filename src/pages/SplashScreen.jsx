import React from 'react';
import { useNavigate } from 'react-router-dom';
import fondo from '../assets/DALL·E 2024-08-25 02.47.54 - A minimalistic and geometric alien design in the style of retro 1960s shapes, matching the previous unicorn and ghost designs. The alien is simplified 3.svg';
import WelcomeSVG from '../assets/Welcome.svg';
import ILoveSVG from '../assets/i love inicio.svg';

export const SplashScreen = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <img src={WelcomeSVG} alt="Welcome" style={styles.welcome} />
            <img src={ILoveSVG} alt="I Love Burger" style={styles.iLove} />
            {    <button style={styles.button} onClick={() => navigate('/home')}>NEXT</button> }
        </div>
    );
};

const styles = {
    container: {
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        top: "2.5rem",
        
        height: '100vh',
        width: '100vw',  
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        textAlign: 'center',
    },
    welcome: {
        width: '80%',
        maxWidth: '300px',
        marginBottom: '20px',
    },
    iLove: {
        width: '60%',
        maxWidth: '250px',
        marginBottom: '30px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '18px',
        backgroundColor: '#ffcc00',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

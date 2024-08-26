import React from 'react';

export const ActionButton = ({ label, onClick }) => {
    return (
        <button onClick={onClick} style={{ margin: '5px' }}>
            {label}
        </button>
    );
};
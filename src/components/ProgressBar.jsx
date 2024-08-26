import React from 'react';

export const ProgressBar = ({ label, value, color }) => {
    return (
        <div>
            <label>{label}</label>
            <div style={{ width: '100%', backgroundColor: '#ccc', marginBottom: '10px' }}>
                <div
                    style={{
                        width: `${value}%`,
                        backgroundColor: color,
                        height: '20px',
                    }}
                />
            </div>
        </div>
    );
};

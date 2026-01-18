import React from 'react';
import '../styles/FloralDecoration.css';
const floralCorner = '/assets/gambar/floral-corner.png';

const FloralDecoration = ({ position = 'top-left', className = '' }) => {
    return (
        <div className={`floral-decoration ${position} ${className}`}>
            <img src={floralCorner} alt="" aria-hidden="true" />
        </div>
    );
};

export default FloralDecoration;

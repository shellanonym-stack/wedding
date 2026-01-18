import React, { useMemo } from 'react';
import '../styles/FallingPetals.css';
const petalImg = '/assets/gambar/petal.png';

const FallingPetals = ({ count = 10 }) => {
    // Use useMemo to generate petals only once, avoiding re-renders
    const petals = useMemo(() =>
        Array.from({ length: count }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 8,
            duration: 10 + Math.random() * 8,
            size: 12 + Math.random() * 18,
            rotation: Math.random() * 360,
        }))
        , [count]);

    return (
        <div className="falling-petals-container" aria-hidden="true">
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className="petal"
                    style={{
                        left: `${petal.left}%`,
                        animationDelay: `${petal.delay}s`,
                        animationDuration: `${petal.duration}s`,
                        width: `${petal.size}px`,
                        height: `${petal.size}px`,
                        '--rotation': `${petal.rotation}deg`,
                    }}
                >
                    <img
                        src={petalImg}
                        alt=""
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            ))}
        </div>
    );
};

export default React.memo(FallingPetals);

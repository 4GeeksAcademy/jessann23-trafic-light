import React, { useEffect, useState } from "react";

function semaforo({ colors }) {
    const [color, setColor] = useState(colors.red); // Color inicial
    const [flashing, setFlashing] = useState(false);


    useEffect(() => {
        if (flashing) {
            const timer = setTimeout(() => {
                setFlashing(false);
                setColor(color); 
            }, 300);

            return () => clearTimeout(timer); 
        }
    }, [flashing, color]);

    
    const handleClick = (newColor) => {
        setColor(newColor);
        setFlashing(true); 
    };

    return (
        <div style={{ backgroundColor: color, height: "100px", width: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: "white" }}>{flashing ? "" : ""}</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <button style={{ backgroundColor: colors.red, color: "white" }} onClick={() => handleClick(colors.red)}>Rojo</button>
                <button style={{ backgroundColor: colors.yellow, color: "white" }} onClick={() => handleClick(colors.yellow)}>Amarillo</button>
                <button style={{ backgroundColor: colors.green, color: "white" }} onClick={() => handleClick(colors.green)}>Verde</button>
                <button style={{ backgroundColor: colors.purple, color: "white" }} onClick={() => handleClick(colors.purple)}>Purpura</button>
            </div>
        </div>
    );
}

export default semaforo;

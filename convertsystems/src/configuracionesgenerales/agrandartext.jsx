// DesingAnuncio.js
import React, { useState } from 'react';

export function Cambiartamaño() {
    const [fontSize, setFontSize] = useState(2.00); // Inicializar en 1vh

    const handleFontSizeChange = (event) => {
        const newSize = parseFloat(event.target.value).toFixed(2); // Convertir a decimal y limitar a dos decimales
        setFontSize(newSize);

        // Define los nuevos valores para las variables CSS
        const root = document.documentElement;
        root.style.setProperty('--fontsize', newSize + 'vh');
    };

    return (
        <div className='container-ajustable-text'>
            <label className='ejemplo'>tamaño de texto</label>
            <div className="contenedor-barra">
                <input
                    className="barra"
                    id="myRange"
                    type="range"
                    min="2"
                    max="3"
                    step="0.01" // Incremento más pequeño para una selección más precisa
                    value={fontSize}
                    onChange={handleFontSizeChange}
                />
                <p className="barravalue">{fontSize}vh</p>
            </div>
        </div>
    );
}

// App.js
import React, { useEffect } from 'react';

export function CambiarPropiedades({nombre, propiedades }) {
    const cambiarPropiedades = () => {
        const root = document.documentElement;
        propiedades.forEach(({ variable, color }) => {
            root.style.setProperty(variable, `${color}`);
            localStorage.setItem(variable, `${color}`); // Guardar cada variable CSS en localStorage
        });
    };

    useEffect(() => {
        const root = document.documentElement;
        propiedades.forEach(({ variable }) => {
            const color = localStorage.getItem(variable);
            if (color) {
                root.style.setProperty(variable, color);
            }
        });
    }, [propiedades]); // Ejecutar cuando `propiedades` cambien

    return (
        <button className='btncambiarpropiedades' onClick={cambiarPropiedades}>{nombre}</button>
    );
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { CambiarPropiedades } from './cambiarpropiedades';
import { Cambiartamaño } from './agrandartext';

export function DesingConfig({ labelClass }) {
    const [currentClass, setCurrentClass] = useState(labelClass);
    const [mostrarPanelConfig, setMostrarPanelConfig] = useState(false);
    const configContainerRef = useRef(null);
    const checkboxRef = useRef(null); // Referencia al checkbox

    useEffect(() => {
        if (labelClass === 'config') {
            const timeoutId = setTimeout(() => {
                setCurrentClass('config');
            }, 500);

            return () => clearTimeout(timeoutId);
        } else {
            setCurrentClass(labelClass);
        }
    }, [labelClass]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Verificar si el clic ocurrió fuera del configcontainer
            if (configContainerRef.current && !configContainerRef.current.contains(event.target)) {
                // Desmarcar el checkbox
                checkboxRef.current.checked = false;
                // Ocultar el panel de configuración
                setMostrarPanelConfig(false);
            }
        };

        // Agregar un listener para los clics en el documento
        document.addEventListener('click', handleClickOutside);

        // Limpiar el listener cuando el componente se desmonte
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const togglePanelConfig = () => {
        // Alternar la visibilidad del panel de configuración
        setMostrarPanelConfig(!mostrarPanelConfig);
    };

    const handleCheckboxChange = () => {
        // Alternar la visibilidad del panel de configuración y actualizar el estado del checkbox
        setMostrarPanelConfig(!mostrarPanelConfig);
        checkboxRef.current.checked = !checkboxRef.current.checked;
    };

    return (
        <div className='containerconfiguracion' ref={configContainerRef}>
            {/* Checkbox para alternar la visibilidad del panel */}
            <input id="toggleconfig" className="checkboxconfig" type="checkbox" ref={checkboxRef} />
            {/* Ícono de configuración que al hacer clic, muestra o oculta el panel */}
            <label htmlFor="toggleconfig" className={currentClass} onClick={togglePanelConfig}>
                <i className="fa-solid fa-gear iconconfig"></i>
            </label>
            {mostrarPanelConfig && (
                <div className="configcontainer">
                    <div className='containeroptionesconfig'>
                        <div className='titleconfig'>Configuraciones</div>
                        <CambiarPropiedades
                            nombre='oscuro'
                            propiedades={[/*
                                { variable: '--backgroudpagina', color: '#1A1C20' },
                                { variable: '--backgroudmenus', color: '#212529' },
                                { variable: '--colorletrasmenu', color: '#595C5F' },
                                { variable: '--colorhovermenuysubmenu', color: 'white' },*/
                            ]}
                        />
                        <CambiarPropiedades
                            nombre='claro'
                            propiedades={[/*
                                { variable: '--backgroudpagina', color: '#ebebeb' },
                                { variable: '--backgroudmenus', color: '#00505e' },
                                { variable: '--colorletrasmenu', color: '#d1d1d1' },
                                { variable: '--colorhovermenuysubmenu', color: 'lime' },*/
                            ]}
                        />
                        <CambiarPropiedades
                            nombre='Protanopia'
                            propiedades={[]}
                        />
                        <CambiarPropiedades
                            nombre='Deuteranopia'
                            propiedades={[]}
                        />
                        <CambiarPropiedades
                            nombre='Tritanopia'
                            propiedades={[]}
                        />
                    </div>
                    <Cambiartamaño />
                </div>
            )}
        </div>
    );
}

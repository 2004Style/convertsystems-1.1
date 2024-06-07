import React, { useEffect, useState } from 'react';
import { CambiarPropiedades } from './cambiarpropiedades';
import { Cambiartamaño } from './agrandartext';

export function DesingConfig({ labelClass }) {
    const [currentClass, setCurrentClass] = useState(labelClass);

    useEffect(() => {
        if (labelClass === 'config') {
            const timeoutId = setTimeout(() => {
                setCurrentClass('config');
            }, 500);//aca se controla el tiempo en aparecer el boton de configuracion

            return () => clearTimeout(timeoutId);
        } else {
            setCurrentClass(labelClass);
        }
    }, [labelClass]);

    return (
        <dir className='containerconfiguracion'>
            <input id="toggleconfig" className="checkboxconfig" type="checkbox" />
            <label htmlFor="toggleconfig" className={currentClass}>
                <i className="fa-solid fa-gear iconconfig"></i>
            </label>

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
        </dir>
    );
}

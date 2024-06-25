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
                            propiedades={[
                                /*
                                { variable: '--backgroudpagina', color: 'rgb(26, 28, 32)' },
                                { variable: '--backgroudmenus', color: 'rgb(33, 37, 41)' },
                                { variable: '--colorletrasmenu', color: 'rgb(194, 194, 197)' },
                                { variable: '--colorhovermenuysubmenu', color: 'rgb(0, 143, 168)' },
                                { variable: '--ancho_del_menu', color: '33vh' },
                                { variable: '--alturavar', color: '8vh' },
                                { variable: '--fontsize_menu', color: '2.5vh' },
                                { variable: '--colorlime', color: 'rgb(7, 223, 0)' },
                                { variable: '--colorwhite', color: 'rgb(255, 255, 255)' },
                                { variable: '--coloblack', color: 'rgb(0, 0, 0)' },
                                { variable: '--color_red', color: 'rgb(216, 0, 0)' },
                                { variable: '--color_orange', color: 'rgb(252, 65, 0)' },
                                { variable: '--fontsize', color: '2vh' },
                                { variable: '--backgroudcopy', color: 'rgb(52, 58, 64)' },
                                { variable: '--colorcopy', color: 'rgb(108, 117, 125)' },
                                { variable: '--alturadelcopy', color: '10vh' },
                                { variable: '--colormarca', color: 'rgba(255, 255, 255, 0.418)' },
                                { variable: '--backgroundmarca', color: 'rgb(34, 34, 34) -webkit-gradient(linear, left top, right top, from(rgb(34, 34, 34)), to(rgb(34, 34, 34)), color-stop(0.5, white)) 0 0 no-repeat' },
                                { variable: '--backgroundimagemarca', color: 'linear-gradient(-40deg, transparent 0%, transparent 40%, white 50%, transparent 60%, transparent 100%)' },
                                { variable: '--anuncios_boton_background', color: 'rgb(7, 223, 0)' },
                                { variable: '--anuncios_boton_color', color: 'rgb(255, 255, 255)' },
                                { variable: '--anuncioscolortext', color: 'rgb(255, 255, 255)' },
                                { variable: '--estrellas_pintadas', color: 'rgb(255, 187, 0)' },
                                { variable: '--estrellas_despintadas', color: 'rgb(199, 199, 199)' },
                                { variable: '--alturadecards', color: '57vh' },
                                { variable: '--anchodecards', color: '40vh' },
                                { variable: '--boxshadowdecartas', color: '0 1vh 1.5vh rgba(0, 0, 0, 0.872)' },
                                { variable: '--backgrounddecartas', color: 'linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%)' },
                                { variable: '--cards_color_lime', color: 'rgb(7, 223, 0)' },
                                { variable: '--cards_color_white', color: 'rgb(255, 255, 255)' },
                                { variable: '--cards_color_black', color: 'rgb(0, 0, 0)' },
                                { variable: '--card_ventas_hover_aqui_mismo', color: 'color-mix(in srgb, var(--cards_color_lime) 70%, white)' },
                                { variable: '--card_ventas_ofertas_degradado_oscuro', color: 'color-mix(in srgb, var(--cards_color_lime) 25%, black)' },
                                { variable: '--card_ofertas_porcentaje', color: 'white' },
                                { variable: '--card_ofertas_color_red', color: 'rgb(216, 0, 0)' },
                                { variable: '--card_ofertas_color_empresa', color: 'rgb(7,223,0)' },
                                { variable: '--card_ofertas_color_orange', color: 'rgb(255, 123, 0)' },
                                { variable: '--card_ofertas_color_informacion', color: 'rgb(255, 255, 255)' },
                                { variable: '--card_proximamente_hover', color: 'rgb(4, 134, 255)' },
                                { variable: '--contacto_color_seleccionado', color: 'rgb(7, 223, 0)' },
                                { variable: '--contacto_color', color: 'rgb(255, 255, 255)' },
                                { variable: '--contacto_background', color: 'rgb(41, 41, 41)' },
                                { variable: '--accesibilida_backgroun', color: 'rgb(7, 223, 0)' },
                                { variable: '--accesibilida_icono', color: 'rgb(0, 0, 0)' },
                                { variable: '--accesibilida_backgroun_activo', color: 'rgb(255, 0, 0)' },
                                { variable: '--accesibilida_icono_activo', color: 'rgb(255, 255, 255)' }
                                */
                            ]}
                        />
                        <CambiarPropiedades
                            nombre='claro'
                            propiedades={[
                                /*
                                { variable: '--backgroudpagina', color: 'rgb(185, 185, 185)' },
                                { variable: '--backgroudmenus', color: 'rgb(0, 80, 94)' },
                                { variable: '--colorletrasmenu', color: 'rgb(209, 209, 209)' },
                                { variable: '--colorhovermenuysubmenu', color: 'rgb(250, 46, 0)' },
                                { variable: '--ancho_del_menu', color: '33vh' },
                                { variable: '--alturavar', color: '8vh' },
                                { variable: '--fontsize_menu', color: '2.5vh' },
                                { variable: '--colorlime', color: 'rgb(7, 223, 0)' },
                                { variable: '--colorwhite', color: 'rgb(255, 255, 255)' },
                                { variable: '--coloblack', color: 'rgb(0, 0, 0)' },
                                { variable: '--color_red', color: 'rgb(216, 0, 0)' },
                                { variable: '--color_orange', color: 'rgb(252, 65, 0)' },
                                { variable: '--fontsize', color: '2vh' },
                                { variable: '--backgroudcopy', color: 'rgb(52, 58, 64)' },
                                { variable: '--colorcopy', color: 'rgb(108, 117, 125)' },
                                { variable: '--alturadelcopy', color: '10vh' },
                                { variable: '--colormarca', color: 'rgba(255, 255, 255, 0.418)' },
                                { variable: '--backgroundmarca', color: 'rgb(34, 34, 34) -webkit-gradient(linear, left top, right top, from(rgb(34, 34, 34)), to(rgb(34, 34, 34)), color-stop(0.5, white)) 0 0 no-repeat' },
                                { variable: '--backgroundimagemarca', color: 'linear-gradient(-40deg, transparent 0%, transparent 40%, white 50%, transparent 60%, transparent 100%)' },
                                { variable: '--anuncios_boton_background', color: 'rgb(0, 36, 104)' },
                                { variable: '--anuncios_boton_color', color: 'rgb(255, 255, 255)' },
                                { variable: '--anuncioscolortext', color: 'rgb(0, 0, 0)' },
                                { variable: '--estrellas_pintadas', color: 'rgb(255, 187, 0)' },
                                { variable: '--estrellas_despintadas', color: 'rgb(129, 129, 129)' },
                                { variable: '--alturadecards', color: '57vh' },
                                { variable: '--anchodecards', color: '40vh' },
                                { variable: '--boxshadowdecartas', color: '0 1vh 1.5vh rgba(0, 0, 0, 0.872)' },
                                { variable: '--backgrounddecartas', color: 'linear-gradient(170deg, rgba(255, 254, 254, 0.623) 0%, rgb(201, 201, 201) 100%)' },
                                { variable: '--cards_color_lime', color: 'rgb(0, 115, 197)' },
                                { variable: '--cards_color_white', color: 'rgb(0, 0, 0)' },
                                { variable: '--cards_color_black', color: 'rgb(0, 0, 0)' },
                                { variable: '--card_ventas_hover_aqui_mismo', color: 'color-mix(in srgb, var(--cards_color_lime) 70%, white)' },
                                { variable: '--card_ventas_ofertas_degradado_oscuro', color: 'color-mix(in srgb, var(--cards_color_lime) 25%, black)' },
                                { variable: '--card_ofertas_porcentaje', color: 'white' },
                                { variable: '--card_ofertas_color_red', color: 'rgb(216, 0, 0)' },
                                { variable: '--card_ofertas_color_empresa', color: 'rgb(0, 97, 114)' },
                                { variable: '--card_ofertas_color_orange', color: 'rgb(0, 124, 17)' },
                                { variable: '--card_ofertas_color_informacion', color: 'rgb(0, 0, 0)' },
                                { variable: '--card_proximamente_hover', color: 'rgb(4, 134, 255)' },
                                { variable: '--contacto_color_seleccionado', color: 'rgb(0, 36, 104)' },
                                { variable: '--contacto_color', color: 'rgb(0, 0, 0)' },
                                { variable: '--contacto_background', color: 'rgb(221, 221, 221)' },
                                { variable: '--accesibilida_backgroun', color: 'rgb(252, 65, 0)' },
                                { variable: '--accesibilida_icono', color: 'rgb(0, 0, 0)' },
                                { variable: '--accesibilida_backgroun_activo', color: 'rgb(255, 0, 0)' },
                                { variable: '--accesibilida_icono_activo', color: 'rgb(255, 255, 255)' }
                                */
                            ]}
                        />

                        <CambiarPropiedades
                            nombre='Protanopia'
                            propiedades={[
                                /*
                                { variable: '--backgroudpagina', color: 'rgb(26, 28, 32)' },
                                { variable: '--backgroudmenus', color: 'rgb(33, 37, 41)' },
                                { variable: '--colorletrasmenu', color: 'rgb(194, 194, 197)' },
                                { variable: '--colorhovermenuysubmenu', color: 'rgb(0, 143, 168)' },
                                { variable: '--ancho_del_menu', color: '33vh' },
                                { variable: '--alturavar', color: '8vh' },
                                { variable: '--fontsize_menu', color: '2.5vh' },
                                { variable: '--colorlime', color: 'rgb(7, 223, 0)' },
                                { variable: '--colorwhite', color: 'rgb(255, 255, 255)' },
                                { variable: '--coloblack', color: 'rgb(0, 0, 0)' },
                                { variable: '--color_red', color: 'rgb(216, 0, 0)' },
                                { variable: '--color_orange', color: 'rgb(252, 65, 0)' },
                                { variable: '--fontsize', color: '2vh' },
                                { variable: '--backgroudcopy', color: 'rgb(52, 58, 64)' },
                                { variable: '--colorcopy', color: 'rgb(108, 117, 125)' },
                                { variable: '--alturadelcopy', color: '10vh' },
                                { variable: '--colormarca', color: 'rgba(255, 255, 255, 0.418)' },
                                { variable: '--backgroundmarca', color: 'rgb(34, 34, 34) -webkit-gradient(linear, left top, right top, from(rgb(34, 34, 34)), to(rgb(34, 34, 34)), color-stop(0.5, white)) 0 0 no-repeat' },
                                { variable: '--backgroundimagemarca', color: 'linear-gradient(-40deg, transparent 0%, transparent 40%, white 50%, transparent 60%, transparent 100%)' },
                                { variable: '--anuncios_boton_background', color: 'rgb(253, 226, 0)' },
                                { variable: '--anuncios_boton_color', color: 'rgb(0, 0, 0)' },
                                { variable: '--anuncioscolortext', color: 'rgb(255, 255, 255)' },
                                { variable: '--estrellas_pintadas', color: 'rgb(255, 187, 0)' },
                                { variable: '--estrellas_despintadas', color: 'rgb(199, 199, 199)' },
                                { variable: '--alturadecards', color: '57vh' },
                                { variable: '--anchodecards', color: '40vh' },
                                { variable: '--boxshadowdecartas', color: '0 1vh 1.5vh rgba(0, 0, 0, 0.872)' },
                                { variable: '--backgrounddecartas', color: 'linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%)' },
                                { variable: '--cards_color_lime', color: 'rgb(0, 80, 172)' },
                                { variable: '--cards_color_white', color: 'rgb(255, 255, 255)' },
                                { variable: '--cards_color_black', color: 'rgb(0, 0, 0)' },
                                { variable: '--card_ventas_hover_aqui_mismo', color: 'color-mix(in srgb, var(--cards_color_lime) 70%, white)' },
                                { variable: '--card_ventas_ofertas_degradado_oscuro', color: 'color-mix(in srgb, var(--cards_color_lime) 25%, black)' },
                                { variable: '--card_ofertas_porcentaje', color: 'white' },
                                { variable: '--card_ofertas_color_red', color: 'rgb(150, 128, 6)' },
                                { variable: '--card_ofertas_color_empresa', color: 'rgb(253, 226, 0)' },
                                { variable: '--card_ofertas_color_orange', color: 'rgb(1, 125, 254)' },
                                { variable: '--card_ofertas_color_informacion', color: 'rgb(255, 255, 255)' },
                                { variable: '--card_proximamente_hover', color: 'rgb(4, 134, 255)' },
                                { variable: '--contacto_color_seleccionado', color: 'rgb(253, 226, 0)' },
                                { variable: '--contacto_color', color: 'rgb(255, 255, 255)' },
                                { variable: '--contacto_background', color: 'rgb(41, 41, 41)' },
                                { variable: '--accesibilida_backgroun', color: 'rgb(253, 226, 0)' },
                                { variable: '--accesibilida_icono', color: 'rgb(0, 0, 0)' },
                                { variable: '--accesibilida_backgroun_activo', color: 'rgb(150, 128, 6)' },
                                { variable: '--accesibilida_icono_activo', color: 'rgb(255, 255, 255)' }
                                */
                            ]}
                        />

                        <CambiarPropiedades
                            nombre='Deuteranopia'
                            propiedades={[
                                /*
                                { variable: '--backgroudpagina', color: 'rgb(26, 28, 32)' },
                                { variable: '--backgroudmenus', color: 'rgb(33, 37, 41)' },
                                { variable: '--colorletrasmenu', color: 'rgb(224, 224, 226)' },
                                { variable: '--colorhovermenuysubmenu', color: 'rgb(0, 143, 168)' },
                                { variable: '--ancho_del_menu', color: '33vh' },
                                { variable: '--alturavar', color: '8vh' },
                                { variable: '--fontsize_menu', color: '2.5vh' },
                                { variable: '--colorlime', color: 'rgb(225, 156, 1)' },
                                { variable: '--colorwhite', color: 'rgb(255, 255, 255)' },
                                { variable: '--coloblack', color: 'rgb(0, 0, 0)' },
                                { variable: '--color_red', color: 'rgb(0, 107, 188)' },
                                { variable: '--color_orange', color: 'rgb(252, 65, 0)' },
                                { variable: '--fontsize', color: '2vh' },
                                { variable: '--backgroudcopy', color: 'rgb(52, 58, 64)' },
                                { variable: '--colorcopy', color: 'rgb(171, 174, 177)' },
                                { variable: '--alturadelcopy', color: '10vh' },
                                { variable: '--colormarca', color: 'rgba(255, 255, 255, 0.418)' },
                                { variable: '--backgroundmarca', color: 'rgb(34, 34, 34) -webkit-gradient(linear, left top, right top, from(rgb(34, 34, 34)), to(rgb(34, 34, 34)), color-stop(0.5, white)) 0 0 no-repeat' },
                                { variable: '--backgroundimagemarca', color: 'linear-gradient(-40deg, transparent 0%, transparent 40%, white 50%, transparent 60%, transparent 100%)' },
                                { variable: '--anuncios_boton_background', color: 'rgb(225, 156, 1)' },
                                { variable: '--anuncios_boton_color', color: 'rgb(255, 255, 255)' },
                                { variable: '--anuncioscolortext', color: 'rgb(255, 255, 255)' },
                                { variable: '--estrellas_pintadas', color: 'rgb(1, 153, 254)' },
                                { variable: '--estrellas_despintadas', color: 'rgb(199, 199, 199)' },
                                { variable: '--alturadecards', color: '57vh' },
                                { variable: '--anchodecards', color: '40vh' },
                                { variable: '--boxshadowdecartas', color: '0 1vh 1.5vh rgba(0, 0, 0, 0.872)' },
                                { variable: '--backgrounddecartas', color: 'linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%)' },
                                { variable: '--cards_color_lime', color: 'rgb(225, 156, 1)' },
                                { variable: '--cards_color_white', color: 'rgb(255, 255, 255)' },
                                { variable: '--cards_color_black', color: 'rgb(0, 0, 0)' },
                                { variable: '--card_ventas_hover_aqui_mismo', color: 'color-mix(in srgb, var(--cards_color_lime) 70%, white)' },
                                { variable: '--card_ventas_ofertas_degradado_oscuro', color: 'color-mix(in srgb, var(--cards_color_lime) 25%, black)' },
                                { variable: '--card_ofertas_porcentaje', color: 'white' },
                                { variable: '--card_ofertas_color_red', color: 'rgb(0, 107, 188)' },
                                { variable: '--card_ofertas_color_empresa', color: 'rgb(225, 156, 1)' },
                                { variable: '--card_ofertas_color_orange', color: 'rgb(72, 125, 203)' },
                                { variable: '--card_ofertas_color_informacion', color: 'rgb(255, 255, 255)' },
                                { variable: '--card_proximamente_hover', color: 'rgb(4, 134, 255)' },
                                { variable: '--contacto_color_seleccionado', color: 'rgb(225, 156, 1)' },
                                { variable: '--contacto_color', color: 'rgb(255, 255, 255)' },
                                { variable: '--contacto_background', color: 'rgb(41, 41, 41)' },
                                { variable: '--accesibilida_backgroun', color: 'rgb(225, 156, 1)' },
                                { variable: '--accesibilida_icono', color: 'rgb(0, 0, 0)' },
                                { variable: '--accesibilida_backgroun_activo', color: 'rgb(0, 107, 188)' },
                                { variable: '--accesibilida_icono_activo', color: 'rgb(255, 255, 255)' }
                                */
                            ]}
                        />

                        <CambiarPropiedades
                            nombre='Tritanopia'
                            propiedades={[
                                /*
                                { variable: '--backgroudpagina', color: 'rgb(1, 145, 158)' },
                                { variable: '--backgroudmenus', color: 'rgb(4, 83, 94)' },
                                { variable: '--colorletrasmenu', color: 'rgb(231, 231, 231)' },
                                { variable: '--colorhovermenuysubmenu', color: 'rgb(253, 181, 190)' },
                                { variable: '--ancho_del_menu', color: '33vh' },
                                { variable: '--alturavar', color: '8vh' },
                                { variable: '--fontsize_menu', color: '2.5vh' },
                                { variable: '--colorlime', color: 'rgb(7, 223, 0)' },
                                { variable: '--colorwhite', color: 'rgb(255, 255, 255)' },
                                { variable: '--coloblack', color: 'rgb(2, 37, 39)' },
                                { variable: '--color_red', color: 'rgb(216, 0, 0)' },
                                { variable: '--color_orange', color: 'rgb(252, 65, 0)' },
                                { variable: '--fontsize', color: '2vh' },
                                { variable: '--backgroudcopy', color: 'rgb(1, 47, 53)' },
                                { variable: '--colorcopy', color: 'rgb(159, 160, 161)' },
                                { variable: '--alturadelcopy', color: '10vh' },
                                { variable: '--colormarca', color: 'rgba(255, 255, 255, 0.418)' },
                                { variable: '--backgroundmarca', color: 'rgb(255, 0, 0) -webkit-gradient(linear, left top, right top, from(rgb(34, 34, 34)), to(rgb(34, 34, 34)), color-stop(0.5, white)) 0 0 no-repeat' },
                                { variable: '--backgroundimagemarca', color: 'linear-gradient(-40deg, transparent 0%, transparent 40%, white 50%, transparent 60%, transparent 100%)' },
                                { variable: '--anuncios_boton_background', color: 'rgb(247, 109, 116)' },
                                { variable: '--anuncios_boton_color', color: 'rgb(255, 255, 255)' },
                                { variable: '--anuncioscolortext', color: 'rgb(255, 255, 255)' },
                                { variable: '--estrellas_pintadas', color: 'rgb(242, 14, 0)' },
                                { variable: '--estrellas_despintadas', color: 'rgb(199, 199, 199)' },
                                { variable: '--alturadecards', color: '57vh' },
                                { variable: '--anchodecards', color: '40vh' },
                                { variable: '--boxshadowdecartas', color: '0 1vh 1.5vh rgba(2, 37, 39, 0.877)' },
                                { variable: '--backgrounddecartas', color: 'linear-gradient(170deg, rgba(1, 78, 82, 0.479) 0%, rgb(0, 58, 61) 100%)' },
                                { variable: '--cards_color_lime', color: 'rgb(252, 109, 118)' },
                                { variable: '--cards_color_white', color: 'rgb(255, 255, 255)' },
                                { variable: '--cards_color_black', color: 'rgb(2, 37, 39)' },
                                { variable: '--card_ventas_hover_aqui_mismo', color: 'color-mix(in srgb, var(--cards_color_lime) 70%, white)' },
                                { variable: '--card_ventas_ofertas_degradado_oscuro', color: 'color-mix(in srgb, var(--cards_color_lime) 25%, black)' },
                                { variable: '--card_ofertas_porcentaje', color: 'white' },
                                { variable: '--card_ofertas_color_red', color: 'rgb(251, 70, 72)' },
                                { variable: '--card_ofertas_color_empresa', color: 'rgb(1, 238, 255)' },
                                { variable: '--card_ofertas_color_orange', color: 'rgb(253, 181, 190)' },
                                { variable: '--card_ofertas_color_informacion', color: 'rgb(255, 255, 255)' },
                                { variable: '--card_proximamente_hover', color: 'rgb(4, 134, 255)' },
                                { variable: '--contacto_color_seleccionado', color: 'rgb(1, 238, 255)' },
                                { variable: '--contacto_color', color: 'rgb(255, 255, 255)' },
                                { variable: '--contacto_background', color: 'rgb(0, 117, 128)' },
                                { variable: '--accesibilida_backgroun', color: 'rgb(1, 238, 255)' },
                                { variable: '--accesibilida_icono', color: 'rgb(2, 37, 39)' },
                                { variable: '--accesibilida_backgroun_activo', color: 'rgb(255, 0, 0)' },
                                { variable: '--accesibilida_icono_activo', color: 'rgb(255, 255, 255)' }*/
                            ]}
                        />

                    </div>
                    <Cambiartamaño />
                </div>
            )}
        </div>
    );
}

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Menu } from '../menu/menu';
import { Copyright } from '../menu/copy';

import { InicioContainer } from '../contenedores/inicio';
import { AnunciosContainer } from '../contenedores/anuncios';
import { ProximamenteContainer } from '../contenedores/proximamente';
import { OfertasContainer } from '../contenedores/ofertas';
import { VentasContainer } from '../contenedores/ventas';
import { DescargasContainerPc, DescargasContainerWeb, DescargasContainerConsola} from '../contenedores/descargas';
import { ContactoContainer } from '../contenedores/contacto';
import { EstadisticasContainer } from '../contenedores/estadisticas';


export function PaginaCs() {
    const [pagina, setPagina] = useState('home'); // Empezar con la página 1

    const renderizarContenedor = () => {
        switch (pagina) {
            case 'home':
                return <InicioContainer />;
            case 'anuncios':
                return <AnunciosContainer />;
            case 'proximos':
                return <ProximamenteContainer />; 
            case 'ofertas':
                return <OfertasContainer />;
            case 'shop':
                return <VentasContainer />;
            case 'freepc':
                return <DescargasContainerPc />;
            case 'contact':
                return <ContactoContainer />;
            case 'freeweb':
                return <DescargasContainerWeb />
            case 'freeconsola':
                return <DescargasContainerConsola/>
            case 'estadisticas':
                return <EstadisticasContainer/>
            default:
                return null;
        }
    };

    const [menuHidden, setMenuHidden] = useState(false);
    const [configClass, setConfigClass] = useState('confihiden'); // Estado para la clase del menú de configuración

    const handleCheckboxChange = (event) => {
        setMenuHidden(!menuHidden);
        setConfigClass(event.target.checked ? 'config' : 'confihiden'); // Cambia la clase según el estado del checkbox
    };

    return (
        <div className="convertsystems">
            <div className="var">
                <a className="shine">Convertsystems</a>
                <input hidden="" className="check-icon" id="check-icon" name="check-icon" type="checkbox" onChange={handleCheckboxChange} />
                <label className="icon-menu" htmlFor="check-icon">
                    <div className="bar bar--1"></div>
                    <div className="bar bar--2"></div>
                    <div className="bar bar--3"></div>
                </label>
                <div className="nombreuser" id="usernamenav"></div>
            </div>

            <div className="containermenucs">
                <div className={menuHidden ? "desingmenu hidden" : "desingmenu"} id="menu">
                    <Menu labelClas={configClass} setPagina={setPagina}/>
                    <Copyright />
                </div>
                <div className="pagina" id="pagina">
                    {renderizarContenedor()}
                </div>
            </div>
        </div>
    );
}
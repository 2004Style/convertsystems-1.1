import { OpcionMenu } from "./opcionesmenu";
import { SubMenu } from "./submenu";
import { DesingConfig } from "../configuracionesgenerales/ajustes";
// eslint-disable-next-line react/prop-types
export function Menu({ labelClas, setPagina }){
    const handleClick = (pagina) => {
        setPagina(pagina);
    };
    return(
        <div className="menu">
            <OpcionMenu TipoIcono='' Icono='house' Nombre="Inicio" onClick={() => handleClick('home')}/>
            <OpcionMenu TipoIcono='' Icono='bell' Nombre='Anuncios' onClick={() => handleClick('anuncios')}/>
            <OpcionMenu TipoIcono='' Icono='diagram-next' Nombre='Proximamente' onClick={() => handleClick('proximos')}/>
            <SubMenu
                Nombre="Ofertas"
                Icono="tags"
                submenus={[
                    { Nombre: 'Escritorio', Icono: 'desktop', onClick: () => handleClick('ofertas') },
                    { Nombre: "Celular", Icono: "mobile-screen-button", onClick: () => handleClick('ofertas') },
                ]}
            />
            <SubMenu
                Nombre="Tienda"
                Icono="shop"
                submenus={[
                    { Nombre: 'Escritorio', Icono: 'desktop', onClick: () => handleClick('shop') },
                    { Nombre: "Celular", Icono: "mobile-screen-button", onClick: () => handleClick('shop') },
                ]}
            />
            <SubMenu
                Nombre="Productos Gratis"
                Icono="download"
                submenus={[
                    { Nombre: 'Escritorio', Icono: 'desktop', onClick: () => handleClick('freepc') },
                    { Nombre: "Web", Icono: "cloud", onClick: () => handleClick('freeweb') },
                    { Nombre: "Consola", Icono: "terminal", onClick: () => handleClick('freeconsola') },
                ]}
            />
            <SubMenu
                Nombre="Redes"
                Icono="share-nodes"
                submenus={[
                    { Direccion: "", Nombre: "Tik Tok", TipoIcono: "brands", Icono: "tiktok" },
                    { Direccion: "", Nombre: "Facebook", TipoIcono: "brands", Icono: "facebook" },
                    { Direccion: "", Nombre: "Discord", TipoIcono: "brands", Icono: "discord" },
                    { Direccion: "", Nombre: "Instagram", TipoIcono: "brands", Icono: "instagram" },
                ]}
            />
            <OpcionMenu TipoIcono='' Icono='envelope' Nombre="Contactanos" onClick={() => handleClick('contact')} />

            <DesingConfig labelClass={labelClas} />
        </div>
    )
}
import { OpcionMenu } from "./opcionesmenu";
import { SubMenu } from "./submenu";
import { DesingConfig } from "../configuracionesgenerales/ajustes";
export function Menu({ labelClas, setPagina }){
    const handleClick = (pagina) => {
        setPagina(pagina);
    };
    return(
        <div className="menu">
            <OpcionMenu TipoIcono='' Icono='house' Nombre="Inicio" onClick={() => handleClick(1)}/>
            <OpcionMenu TipoIcono='' Icono='bell' Nombre='Anuncios' onClick={() => handleClick(2)}/>
            <OpcionMenu TipoIcono='' Icono='diagram-next' Nombre='Proximamente' onClick={() => handleClick(3)}/>
            <SubMenu
                Nombre="Ofertas"
                Icono="tags"
                submenus={[
                    { Nombre: 'Escritorio', Icono: 'desktop', onClick: () => handleClick(4) },
                    { Nombre: "Celular", Icono: "mobile-screen-button", onClick: () => handleClick(4) },
                ]}
            />
            <SubMenu
                Nombre="Tienda"
                Icono="shop"
                submenus={[
                    { Nombre: 'Escritorio', Icono: 'desktop', onClick: () => handleClick(5) },
                    { Nombre: "Celular", Icono: "mobile-screen-button", onClick: () => handleClick(5) },
                ]}
            />
            <SubMenu
                Nombre="Productos Gratis"
                Icono="download"
                submenus={[
                    { Nombre: 'Escritorio', Icono: 'desktop', onClick: () => handleClick(6) },
                    { Nombre: "Celular", Icono: "mobile-screen-button", onClick: () => handleClick(6) },
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
            <OpcionMenu TipoIcono='' Icono='envelope' Nombre="Contactanos" onClick={() => handleClick(7)} />

            <DesingConfig labelClass={labelClas} />
        </div>
    )
}
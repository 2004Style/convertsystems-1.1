import { useState } from 'react';
import { OptionSubmenu } from "./SubMenuOption";

export function SubMenu({ TipoIcono, Icono, Nombre, submenus, onClick }) {
    const [subMenuVisible, setSubMenuVisible] = useState(false);

    const nombreMostrado = Nombre ? Nombre : 'Opcion';
    const iconomostrado = Icono ? Icono : 'question';

    const handleClick = () => {
        setSubMenuVisible(!subMenuVisible);
    };

    return (
        <div className="options" onClick={handleClick}>
            <i className={`fa-solid fa-${iconomostrado} custom-size`}></i>{nombreMostrado}
            <div className={subMenuVisible ? "sub show" : "sub"}>
                {submenus && submenus.map((submenu, index) => (
                    <OptionSubmenu
                        key={index}
                        Direccion={submenu.Direccion}
                        TipoIcono ={submenu.TipoIcono}
                        Icono={submenu.Icono}
                        Nombre={submenu.Nombre}
                        onClick={submenu.onClick}
                    />
                ))}
            </div>
        </div>
    );
}

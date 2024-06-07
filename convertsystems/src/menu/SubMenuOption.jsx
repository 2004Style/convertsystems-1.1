export function OptionSubmenu({ TipoIcono, Icono, Nombre, onClick}) {
    const nombreMostrado = Nombre ? Nombre : 'Opcion';
    const tipoiconomostrado = TipoIcono ? TipoIcono : 'solid';
    const iconomostrado = Icono ? Icono : 'question';

    return (
        <div className="submenu" onClick={onClick}>
            <i className={`fa-${tipoiconomostrado} fa-${iconomostrado} custom-size`}></i>
            {nombreMostrado}
        </div>
    );
}

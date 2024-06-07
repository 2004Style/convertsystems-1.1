export function OpcionMenu({ TipoIcono, Icono, Nombre, onClick}) {
    const nombremostrado = Nombre ? Nombre : 'Opcion';
    const tipoiconomostrado = TipoIcono ? TipoIcono : 'solid';
    const iconomostrado = Icono ? Icono : 'envelope';
    return (
        <div className="options" onClick={onClick}>
            <i className={`fa-${tipoiconomostrado} fa-${iconomostrado} custom-size`}></i>{nombremostrado}
        </div>
    );
}

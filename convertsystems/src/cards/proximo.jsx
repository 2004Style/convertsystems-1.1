import React from 'react';

export function ProxCard({ Id, Nombre, Categoria, Dia, Mes, Año, Descripcion }) {
    const idmostrado = Id ? Id : 'null';
    const nombremostrado = Nombre ? Nombre : 'Producto Desconocido';
    const categoriamostrado = Categoria ? Categoria : 'Desconocido';
    const diamostrado = Dia ? Dia : '00';
    const mesmostrado = Mes ? Mes : '00';
    const añomostrado = Año ? Año : '00';
    const descripcionmostrado = Descripcion ? Descripcion : 'sin descripción';
    return (
        <div className="plcardcontainer" id={`#${idmostrado}`}>
            <div className="plcard">
                <div className="front">
                    <div className="plcard-top">
                        <p className="plcard-top-para">ConvertSystems</p>
                    </div>

                    <img className="plfondo" src="../src/pictures/fondo.png" alt="..." />
                    <div className="plpropertisfont">
                        <p className="plnombreproducto">{nombremostrado}</p>
                        <p className="plcategoria">Categoría: {categoriamostrado}</p>
                        <p className="pllanzamiento">Fecha De Lanzamiento</p>
                        <p className="plfecha">{diamostrado}/{mesmostrado}/{añomostrado}</p>
                    </div>
                </div>
                <div className="back">
                    <p className="information">{descripcionmostrado}</p>
                    <div className="plicons">
                        <i className="fa-brands fa-facebook plredes"></i>
                        <i className="fa-brands fa-youtube plredes"></i>
                        <i className="fa-brands fa-instagram plredes"></i>
                        <i className="fa-brands fa-tiktok plredes"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

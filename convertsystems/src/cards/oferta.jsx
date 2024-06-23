import React, { useState } from 'react';
import { EstrellasDesing } from '../estrellas/estrellas';
import { OpcionesDePagos } from '../pagos/pagos';

const fondo = "https://firebasestorage.googleapis.com/v0/b/convertsystems-90dde.appspot.com/o/fondo.png?alt=media&token=72490825-f212-45a6-ab52-a12e3c4864a7";

// eslint-disable-next-line react/prop-types
export function OfertCard({ Id, Nombre, Porcentaje, Dias, Horas, Minutos, Precio, Direccion }) {
    const [modalVisible, setModalVisible] = useState(false);

    const idmostrado = Id ? Id : 'null';
    const nombremostrado = Nombre ? Nombre : 'Desconocido';
    const porcentajemostrado = Porcentaje ? Porcentaje : '0';

    const diamostrado = Dias ? Dias : '0';
    const horamostrado = Horas ? Horas : '0';
    const minutomostrado = Minutos ? Minutos : '0';

    const preciomostrado = Precio ? Precio : '00.00';
    const iconbtn = Precio ? 'cart-shopping' : 'lock';

    const direccionmostrado = Direccion ? Direccion : '';

    const descuento = (preciomostrado * porcentajemostrado) / 100;
    const PrecioDescuento = preciomostrado - descuento;

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
        <div className="ocard" id={`#${idmostrado}`}>
            <div className="opentagono">
                <div className="odescuento">{porcentajemostrado}%</div>
            </div>
            <img className="ofondodescuento" src={fondo} alt="" />
            <div className="ogroupinfoofertas">
                <div className="onombreproducto">{nombremostrado}</div>
                <div className="ocontainerestrellas">
                    <EstrellasDesing />
                </div>
                <div className="otiempolimite">{diamostrado} Días, {horamostrado} Horas, {minutomostrado} Minutos</div>
                <div className="omasinformacion">Más información <a className="a">aquí mismo</a></div>
            </div>
            <div className="ocontainerprecioandboton">
                <div className="oprecios">
                    <div className="opreciooferta">S/. {preciomostrado}</div>
                    <div>S/. {PrecioDescuento.toFixed(2)}</div>
                </div>
                <button className="obtncomprar" onClick={openModal}><i className={`fa-solid fa-${iconbtn} oicon`}></i>Comprar</button>
            </div>
            
        </div>
        {modalVisible && (
                <OpcionesDePagos closeModal={closeModal} producto={nombremostrado} precio={PrecioDescuento.toFixed(2)} />
            )}
        </>
    );
}

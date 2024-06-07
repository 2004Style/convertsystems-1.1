import { EstrellasDesing } from '../estrellas/estrellas'

export function OfertCard({ Id, Nombre, Porcentaje, Dias, Horas, Minutos, Precio, Direccion }) {

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

    return (
        <div className="ocard" id={`#${idmostrado}`}>
            <div className="opentagono">
                <div className="odescuento">{porcentajemostrado}%</div>
            </div>
            <img className="ofondodescuento" src="../src/pictures/fondo.png" alt="" />
            <div className="ogroupinfoofertas">
                <div className="onombreproducto">{nombremostrado}</div>
                <div className="ocontainerestrellas">
                    <EstrellasDesing />
                </div>
                <div className="otiempolimite">{diamostrado} Días, {horamostrado} Horas, {minutomostrado} Minutos</div>
                <div className="omasinformacion">Más información <a className="a" href="#">aquí mismo</a></div>
            </div>
            <div className="ocontainerprecioandboton">
                <div className="oprecios">
                    <div className="opreciooferta">S/. {preciomostrado}</div>
                    <div>S/. {PrecioDescuento.toFixed(2)}</div>
                </div>
                <a className="obtncomprar" href={direccionmostrado}><i className={`fa-solid fa-${iconbtn} oicon`}></i>Comprar</a>
            </div>
        </div>
    )
}

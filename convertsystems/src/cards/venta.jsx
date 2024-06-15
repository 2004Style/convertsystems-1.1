import { EstrellasDesing } from '../estrellas/estrellas'

const fondo = "https://firebasestorage.googleapis.com/v0/b/convertsystems-90dde.appspot.com/o/fondo.png?alt=media&token=72490825-f212-45a6-ab52-a12e3c4864a7"

export function VentaCard({ Id, Nombre, Precio, Direccion, DireccionAnuncio })
{
    const idmostrado = Id ? Id : 'null';
    const nombremostrado = Nombre ? Nombre : 'Producto Desconocido';
    const preciomostrado = Precio ? Precio : '00.00';
    const iconbtn = Precio ? 'cart-shopping' : 'lock';
    const direccionrecivida = Direccion ? Direccion : '';


    return (
        <div className='containerproductcard' id={`#${idmostrado}`}>
            <div className='cardventa'>
                <span className='newspan'></span>
                <span className='precio'>S/.{preciomostrado}</span>
                <img className='logoproducto' src={fondo} alt='...' />
                <div className='nameproducto'>{nombremostrado}</div>
                <div className='contenedordeestrellas'>
                    <EstrellasDesing />
                </div>
                <div className='productosvermas'>Si no sabes cómo funciona el producto puedes encontrar más
                    información
                    <a className='anclavermas' href={DireccionAnuncio}> aquí mismo.</a>
                </div>
                <a className='btncomprar' href={direccionrecivida}><i className={`fa-solid fa-${iconbtn} customcompraicon`}></i>Comprar</a>
            </div>
        </div>
    )
}
export function VentaCardOld({ Id, Nombre, Precio, Direccion, DireccionAnuncio }) {
    const idmostrado = Id ? Id : 'null';
    const nombremostrado = Nombre ? Nombre : 'Producto Desconocido';
    const preciomostrado = Precio ? Precio : '00.00';
    const iconbtn = Precio ? 'cart-shopping' : 'lock';
    const direccionrecivida = Direccion ? Direccion : '';
    return (
        <article>
            <div className='containerproductcard' id={`#${idmostrado}`}>
                <div className='cardventa'>
                    <span className='precio'>S/.{preciomostrado}</span>
                    <img className='logoproducto' src={fondo} alt='...' />
                    <div className='nameproducto'>{nombremostrado}</div>
                    <div className='contenedordeestrellas'>
                        <EstrellasDesing />
                    </div>
                    <div className='productosvermas'>Si no sabes cómo funciona el producto puedes encontrar más
                        información
                        <a className='anclavermas' href={DireccionAnuncio}> aquí mismo.</a>
                    </div>
                    <a className='btncomprar' href={direccionrecivida}><i className={`fa-solid fa-${iconbtn} customcompraicon`}></i>Comprar</a>
                </div>
            </div>
        </article>
    )
}


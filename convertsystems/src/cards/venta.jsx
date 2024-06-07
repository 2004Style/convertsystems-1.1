import { EstrellasDesing } from '../estrellas/estrellas'

export function VentaCard({ Id, Nombre, Precio, Direccion, DireccionAnuncio })
{
    const idmostrado = Id ? Id : 'null';
    const nombremostrado = Nombre ? Nombre : 'Producto Desconocido';
    const preciomostrado = Precio ? Precio : '00.00';
    const iconbtn = Precio ? 'cart-shopping' : 'lock';
    const direccionrecivida = Direccion ? Direccion : '';


    return (
        <div className='containerproductcard' id={`#${idmostrado}`}>
            <div className='cardbox'>
                <span className='newspan'></span>
                <span className='precio'>S/.{preciomostrado}</span>
                <img className='logoproducto' src='../src/pictures/fondo.png' alt='...' />
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
                <div className='cardbox'>
                    <span className='precio'>S/.{preciomostrado}</span>
                    <img className='logoproducto' src='../src/pictures/fondo.png' alt='...' />
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


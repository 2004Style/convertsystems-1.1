import { EstrellasDesing } from "../estrellas/estrellas";

const fondo = "https://firebasestorage.googleapis.com/v0/b/convertsystems-90dde.appspot.com/o/fondo.png?alt=media&token=72490825-f212-45a6-ab52-a12e3c4864a7"

export function DescargaCardFree({ Id, Nombre, Direccion, DireccionAnuncio }) {
    const idmostrado = Id ? Id : 'null';
    const nombremostrado = Nombre ? Nombre : 'Producto Desconocido';
    const direccionrecivida = Direccion ? Direccion : '';
    return (
        <article>
            <div className='containerproductcard' id={`#${idmostrado}`}>
                <div className='cardbox'>
                    <span className='newspan'></span>
                    <img className='logoproducto' src={fondo} alt='...' />
                    <div className='nameproducto'>{nombremostrado}</div>
                    <div className='contenedordeestrellas'>
                        <EstrellasDesing />
                    </div>
                    <div className='productosvermas'>Si no sabes cómo funciona el producto puedes encontrar más
                        información
                        <a className='anclavermas' href={DireccionAnuncio}> aquí mismo.</a>
                    </div>
                    <a className='btncomprar' href={direccionrecivida} download><i className={`fa-solid fa-download customcompraicon`}></i>Descargar</a>
                </div>
            </div>
        </article>
    )
}
export function DescargaCardFreeOld({ Id, Nombre, Direccion, DireccionAnuncio }) {
    const idmostrado = Id ? Id : 'null';
    const nombremostrado = Nombre ? Nombre : 'Producto Desconocido';
    const direccionrecivida = Direccion ? Direccion : '';
    return (
        <article>
            <div className='containerproductcard' id={`#${idmostrado}`}>
                <div className='cardbox'>
                    <img className='logoproducto' src={fondo} alt='...' />
                    <div className='nameproducto'>{nombremostrado}</div>
                    <div className='contenedordeestrellas'>
                        <EstrellasDesing />
                    </div>
                    <div className='productosvermas'>Si no sabes cómo funciona el producto puedes encontrar más
                        información
                        <a className='anclavermas' href={DireccionAnuncio}> aquí mismo.</a>
                    </div>
                    <a className='btncomprar' href={direccionrecivida}><i className={`fa-solid fa-download customcompraicon`}></i>Descargar</a>
                </div>
            </div>
        </article>
    )
}
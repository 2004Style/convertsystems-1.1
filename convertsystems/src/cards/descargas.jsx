import { EstrellasDesing } from "../estrellas/estrellas";

export function DescargaCardFree({ Id, Nombre, Direccion, DireccionAnuncio }) {
    const idmostrado = Id ? Id : 'null';
    const nombremostrado = Nombre ? Nombre : 'Producto Desconocido';
    const direccionrecivida = Direccion ? Direccion : '';
    return (
        <article>
            <div className='containerproductcard' id={`#${idmostrado}`}>
                <div className='cardbox'>
                    <span className='newspan'></span>
                    <img className='logoproducto' src='../src/pictures/fondo.png' alt='...' />
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
export function DescargaCardFreeOld({ Id, Nombre, Direccion, DireccionAnuncio }) {
    const idmostrado = Id ? Id : 'null';
    const nombremostrado = Nombre ? Nombre : 'Producto Desconocido';
    const direccionrecivida = Direccion ? Direccion : '';
    return (
        <article>
            <div className='containerproductcard' id={`#${idmostrado}`}>
                <div className='cardbox'>
                    <img className='logoproducto' src='../src/pictures/fondo.png' alt='...' />
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
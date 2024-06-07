import { EstrellasDesing } from "../estrellas/estrellas"
import { Aimagenescarrusel } from "./carruselimagenes";

export function DisenioAnuncio({ Id, Nombre, DireccionVenta, srcimagenes, requisistossistema, requisitospreintalacion, pasosdeintalacion }) {
    const idmostrado = Id ? Id : 'null';
    const nombremostrado = Nombre ? Nombre : 'Producto Desconocido';
    const direccionmostrado = DireccionVenta ? DireccionVenta : '';

    return (
        <div className="contenedoranucios" id={`#${idmostrado}`}>
            <div className="acabecera">
                <img className="aicon" src="../src/pictures/logo.png" alt="" />
                <div className="acontainernc">
                    <div className="anombre">{nombremostrado}</div>
                    <div className="acontainereyd">
                        <EstrellasDesing />
                        <a className="btniracomprar" href={direccionmostrado}>
                            <span className="iracoprar">ir a comprar</span>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="adivisor" />
            <div className="acuerpo">

                <Aimagenescarrusel imagenes={srcimagenes} />

                <div className="ainformacion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloremque! Beatae, repellat. Aliquid recusandae consequatur totam veniam ipsum numquam, rerum odio adipisci magni nulla est neque optio ut, sequi repellat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, reiciendis rem autem tempora, odio vero ut voluptatem velit sequi accusantium minus. Reiciendis temporibus ea quis praesentium, perspiciatis minima numquam autem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga doloremque magni qui culpa mollitia vel. Inventore laboriosam placeat et veniam quos. Consequuntur dolore impedit labore molestiae quia eius rerum earum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium natus dolores quam, vel amet, nihil numquam, distinctio reprehenderit explicabo ratione eius. Soluta sit sequi dolorem adipisci velit nobis libero ipsa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non molestias reprehenderit porro doloribus quia, voluptatem eligendi suscipit architecto mollitia adipisci magnam rerum dicta ullam eveniet harum voluptate soluta pariatur nisi.
                </div>
                <div className="arequisitossist">
                    Requisitos del sistema
                    <ul className="alist">
                        {requisistossistema && requisistossistema.map((requisito, index) => (
                            <li key={index}>{`${index + 1}. ${requisito}`}</li>
                        ))}
                    </ul>
                </div>
                <div className='arequisistosprei'>
                    Requisitos pre instalación
                    <ul className="alist">
                        {requisitospreintalacion && requisitospreintalacion.map((requisito, index) => (
                            <li key={index}>{`${index + 1}. ${requisito}`}</li>
                        ))}
                    </ul>
                </div>
                <div className="ainstalacion">
                    Instalación paso a paso
                    <ul className="alist">
                        {pasosdeintalacion && pasosdeintalacion.map((requisito, index) => (
                            <li key={index}>{`${index + 1}. ${requisito}`}</li>
                        ))}
                    </ul>

                    <div className="lineaneon"></div>
                    <div className="aenlacesdeintalacion">enlaces de los videos de la instalación
                        <a className="acontenidoenlacesi" href="#">tik tok</a>
                        <a className="acontenidoenlacesi" href="#">instagram</a>
                        <a className="acontenidoenlacesi" href="#">facebook</a>
                    </div>
                </div>

                <div className="lineaneon"></div>
                <div className="afuncionamiento">enlaces de videos del funcionamiento<ul className="wrapper">
                    <li className="icon facebook">
                        <i className="fa-brands fa-facebook"></i>
                        <span className="tooltip">Facebook</span>
                    </li>
                    <li className="icon tiktok">
                        <i className="fa-brands fa-tiktok"></i>
                        <span className="tooltip">TikTok</span>
                    </li>
                    <li className="icon instagram">
                        <i className="fa-brands fa-instagram"></i>
                        <span className="tooltip">Instagram</span>
                    </li>
                </ul>
                </div>
                

            </div>
        </div>
    )
}

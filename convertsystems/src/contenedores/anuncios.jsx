import { DisenioAnuncio } from '../anuncios/anuncio';
export function AnunciosContainer() {
    return (
        <div className='containeranuncios'>
            <DisenioAnuncio
                DireccionVenta='descargas.html#4'

                srcimagenes={[
                    "../src/pictures/imagen01.png",
                    "../src/pictures/imagen02.png",
                    "../src/pictures/imagen03.png",
                ]}

                requisistossistema={[
                    "Requisito del sistema",
                    "Requisito del sistema",
                ]}
                requisitospreintalacion={[
                    "Requisito de instalacion",
                    "Requisito de instalacion",
                    "Requisito de instalacion",
                ]}
                pasosdeintalacion={[
                    "Paso de instalacion",
                    "Paso de instalacion",
                    "Paso de instalacion",
                    "Paso de instalacion",
                    "Paso de instalacion",
                ]}
            />
        </div>
    )
}
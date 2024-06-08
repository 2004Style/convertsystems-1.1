import { DisenioAnuncio } from '../anuncios/anuncio';

const imege1 = "https://firebasestorage.googleapis.com/v0/b/convertsystems-90dde.appspot.com/o/imagen01.png?alt=media&token=6b9d68fc-89ce-44ba-b6d1-fdd75e3353fe"
const imege2 = "https://firebasestorage.googleapis.com/v0/b/convertsystems-90dde.appspot.com/o/imagen02.png?alt=media&token=e85c8842-7e15-4815-a9e9-9ee2fe41bfa0"
const imege3 = "https://firebasestorage.googleapis.com/v0/b/convertsystems-90dde.appspot.com/o/imagen03.png?alt=media&token=65cf5393-cfc5-46d1-a400-ca6ee1b45e14"

export function AnunciosContainer() {
    return (
        <div className='containeranuncios'>
            <DisenioAnuncio
                srcimagenes={[
                    imege1,
                    imege2,
                    imege3,
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
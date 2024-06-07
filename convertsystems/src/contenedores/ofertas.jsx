import { OfertCard } from '../cards/oferta';
export function OfertasContainer() {
    return (
        <div className='containercards'>
            <OfertCard />
            <OfertCard Nombre='producto anonimo' Porcentaje='15' Dias='3' Horas='3' Minutos='30' Precio='12.99' />
            <OfertCard Nombre='producto anonimo' Porcentaje='5' Dias='3' Horas='3' Minutos='30' Precio='5.99' />
            <OfertCard Nombre='producto anonimo' Porcentaje='70' Dias='3' Horas='3' Minutos='30' Precio='30.99' />
            <OfertCard Nombre='producto anonimo' Porcentaje='80' Dias='3' Horas='3' Minutos='30' Precio='75.99' />
            <OfertCard Nombre='producto anonimo' Porcentaje='45' Dias='3' Horas='3' Minutos='30' Precio='100' />
        </div>
    )
};
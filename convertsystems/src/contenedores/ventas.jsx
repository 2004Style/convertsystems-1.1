import { VentaCard, VentaCardOld} from '../cards/venta';
export function VentasContainer() {
    return (
        <div className='containercards'>
            <VentaCard Id='3' />
            <VentaCardOld Id='4' />
            <VentaCard Id='5' Nombre='producto anonimo' Precio='15.00' />
            <VentaCard Id='6' Nombre='producto anonimo' Precio='45.00' />
        </div>
    )
};
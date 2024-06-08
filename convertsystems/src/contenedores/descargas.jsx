import { DescargaCardFree, DescargaCardFreeOld } from "../cards/descargas"

const archivo = ""

export function DescargasContainerPc() {
    return (
        <div className='containercards'>
            <DescargaCardFree Id='1' Direccion={archivo}/>
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
        </div>
    )
};
export function DescargasContainerWeb() {
    return (
        <div className='containercards'>
            <DescargaCardFree Id='1' Direccion={archivo} />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
        </div>
    )
};
export function DescargasContainerConsola() {
    return (
        <div className='containercards'>
            <DescargaCardFree Id='1' Direccion={archivo} />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
            <DescargaCardFreeOld Id='2' />
        </div>
    )
};
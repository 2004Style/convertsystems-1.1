import { DescargaCardFree, DescargaCardFreeOld } from "../cards/descargas"
export function DescargasContainer() {
    return (
        <div className='containercards'>
            <DescargaCardFree Id='1'/>
            <DescargaCardFreeOld Id='2' />
        </div>
    )
};
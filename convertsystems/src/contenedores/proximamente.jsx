import { ProxCard } from '../cards/proximo';

export function ProximamenteContainer() {
    return (
        <div className='containercards'>
            <ProxCard />
            <ProxCard Nombre='producto anonimo' Categoria='celular' Dia='23' Mes='09' Año='2024' Descripcion='descripcion' />
            <ProxCard Nombre='producto anonimo' Categoria='consola' Dia='11' Mes='11' Año='2024' Descripcion='descripcion' />
            <ProxCard Nombre='producto anonimo' Categoria='escritorio' Dia='07' Mes='02' Año='2025' Descripcion='descripcion' />
            <ProxCard Nombre='producto anonimo' Categoria='escritorio' Dia='05' Mes='07' Año='2025' Descripcion='descripcion' />
        </div>
    )
}
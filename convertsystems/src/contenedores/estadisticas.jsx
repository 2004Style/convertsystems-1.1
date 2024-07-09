import { LineChart, PieChart, BarChart, DoughnutChart } from "../estadisticas/graficas"
export function EstadisticasContainer() {
    return (
        <div className='containerestadisticas'>
            <LineChart />
            <PieChart />
            <BarChart />
            <DoughnutChart />
        </div>
    )
}
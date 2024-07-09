
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, RadialLinearScale, Filler, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie, Radar, Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale,
    Filler,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);


export function LineChart() {
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiebre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                label: 'Productos gratis',
                backgroundColor: 'lime',
                borderColor: 'lime',
                data: [60, 69, 60, 61, 56, 55, 60, 40, 63, 50, 55, 65],
                fill: false,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    return (
        <div style={{ width: '80%', height: '400px' }}>
            <div className='anombre'>Descargas Anuales De Los productos Gratis</div>
            <Line data={data} options={options} />
        </div>
    );
}

export function PieChart() {
    const data = {
        labels: ['Ventas', 'Gratis'],
        datasets: [
            {
                label: 'Tipos más descargasdos',
                backgroundColor: ['orange', 'rgb(8, 255, 8)', 'orange'],
                data: [7, 19],
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Tipos más descargasdos',
            },
            datalabels: {
                formatter: (value, context) => {
                    let sum = 0;
                    let dataArr = context.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    return percentage;
                },
                color: '#000000',
            },
        },
    };

    return (
        <div style={{ width: '80%', height: '400px' }}>
            <div className='anombre'>Tipos más descargasdos</div>
            <Pie data={data} options={options} />
        </div>
    );
}

export function BarChart() {
    const data = {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [
            {
                label: 'Ventas',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
                hoverBorderColor: 'rgba(54, 162, 235, 1)',
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Ventas semanales',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ width: '80%', height: '400px' }}>
            <div className='anombre'>Ventas semanales</div>
            <Bar data={data} options={options} />
        </div>
    );
}

export function DoughnutChart() {
    const data = {
        labels: ['Consola', 'Movil', 'Escritorio'],
        datasets: [
            {
                label: 'Dataset 1',
                backgroundColor: ['red', 'lime', 'orange'],
                hoverBackgroundColor: ['red', 'lime', 'orange'],
                data: [7, 19, 10],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = ctx.dataset.data.reduce((acc, val) => acc + val, 0);
                    let percentage = ((value * 100) / sum).toFixed(2) + '%';
                    return percentage;
                },
                color: '#ffffff',
                font: {
                    weight: 'bold',
                    size: 14,
                },
            },
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Descargas de las categorias',
            },
        },
    };

    return (
        <div style={{ width: '80%', height: '400px' }}>
            <div className='anombre'>Preferencias de categorias</div>
            <Doughnut data={data} options={options} />
        </div>
    );
}
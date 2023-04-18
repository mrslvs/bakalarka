import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ chartData, setChartData }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart (do not display this title)',
            },
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 30,
                title: {
                    display: true,
                    text: 'Centimeters',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'miliseconds',
                },
            },
        },
    };

    let labels = [];
    for (let i = 0; i < process.env.ITERATIONS; i++) {
        labels.push(i * process.env.COMMUNICATION_DELAY);
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: chartData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return <Line options={options} data={data} />;
};

export default Chart;

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

const Chart = ({ chartData }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
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
                    text: 'Miliseconds',
                },
            },
        },
        animation: {
            duration: 0,
        },
    };

    let labels = [];
    for (let i = 0; i < process.env.ITERATIONS; i++) {
        labels.push(i * process.env.SAMPLING_RATE);
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

    return (
        <div className="max-h-80">
            <Line options={options} data={data} />
        </div>
    );
};

export default Chart;

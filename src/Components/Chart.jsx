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
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 30,
            },
        },
    };

    let labels = [];
    for (let i = 0; i < process.env.ITERATIONS; i++) {
        labels.push(i * process.env.COMMUNICATION_DELAY);
    }
    // const labels = ['January', 'February'];

    let testData = [5, 5, 5, 5];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                // data: [1, 2],
                data: chartData,
                // data: testData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const increase = () => {
        testData.push(5);
        console.log('testData: ' + testData);
        setChartData(1);
    };

    return (
        <div>
            <Line options={options} data={data} />
            <button onClick={increase}>click me</button>
        </div>
    );
};

export default Chart;

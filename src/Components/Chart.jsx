// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const Chart = () => {
//     let data = [
//         {
//             id: 1,
//             distance: 9,
//         },
//         {
//             id: 2,
//             distance: 9,
//         },
//         {
//             id: 3,
//             distance: 9,
//         },
//         {
//             id: 4,
//             distance: 3,
//         },
//     ];

//     let dataTemp = {
//         labels: data.map((row) => row.id),
//         datasets: [
//             {
//                 label: 'distance',
//                 data: data.map((row) => row.distance),
//             },
//         ],
//     };

//     return <Line data={dataTemp} />;
// };

// export default Chart;

// ###################################################

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

const Chart = () => {
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
    };

    const labels = ['January', 'February'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [1, 2],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [1, 2],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return <Line options={options} data={data} className="h-100 w-100" />;
};

export default Chart;

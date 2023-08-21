import React from 'react';
import { Line } from 'react-chartjs-2';

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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Lines(props) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'GQR x Profundidade (Top 10)',
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return value.toFixed(3);
                    },
                },
            },
        },
    };

    return (
        <div className={`line-chart ${props.chartId}`}>
            <Line
            options={options}
            data={props.data}
        />
        </div>
    );
}

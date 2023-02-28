import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const data = {
  title: {
    display: true,
    text: 'Chart.js Bar Chart',
  },
  labels: [1, 2, 3],
  datasets: [
    {

      label: '# of Votes',
      data: [7, 5, 12],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(74, 255, 186, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(74, 255, 186, 1)',
      ],
      borderWidth: 1,

    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      display: true,
      onHover(e) {
        e.native.target.style.cursor = 'pointer';
      },
      onLeave(e) {
        e.native.target.style.cursor = 'default';
      },
    },
  },
};

function DoughnutChart() {
  return (
    <>
      <h3 className="font-bold text-white">Donuts Chart</h3>
      <Doughnut data={data} options={options} className="mt-4 mb-10" />
    </>
  );
}

export default DoughnutChart;

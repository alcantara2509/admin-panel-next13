import React from 'react';
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      onHover(e) {
        e.native.target.style.cursor = 'pointer';
      },
      onLeave(e) {
        e.native.target.style.cursor = 'default';
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100, 300, 500, 450, 400, 600, 500],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 1)',
    },
    {
      label: 'Dataset 2',
      data: [350, 400, 250, 350, 550, 300, 400],
      borderColor: 'rgb(74, 255, 186)',
      backgroundColor: 'rgba(74, 255, 186, 1)',
    },
  ],
};

function VerticalChart() {
  return (
    <>
      <h3 className="font-bold text-white">Bar Chart</h3>
      <Bar options={options} data={data} className="mb-10" />;
    </>
  );
}

export default VerticalChart;

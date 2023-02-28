import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

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

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100, 300, 500, 450, 400, 600, 500],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [350, 400, 250, 350, 550, 300, 400],
      borderColor: 'rgb(74, 255, 186)',
      backgroundColor: 'rgba(74, 255, 186, 0.5)',
    },
  ],
};

function LinesChart() {
  return (
    <>
      <h3 className="font-bold text-white">Lines Chart</h3>
      <Line options={options} data={data} className="mb-10" />;
    </>
  );
}

export default LinesChart;

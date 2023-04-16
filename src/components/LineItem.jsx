import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Thursday", "Friday", "Saturday", "Sunday", "Monday"],
  datasets: [
    {
      label: "Profile Views",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [0, 0, 2, 1,0],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  },
};

const SavingsChart = () => {
  return (
    <div className="ml-4 bg-cover h-64 m-2 rounded-2xl w-[53%] flex items-center justify-center p-4 mr-8">
      <Line data={data} options={config} />
    </div>
  );
};

export default SavingsChart;

import React from "react";
import Nav from "../navBar/Nav";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Tooltip,
  Legend
);
function Stat0() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "DS1",
        data: [3, 9, 6, 7, 4, 12, 10],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.3,
      },
      // {
      //   label: "DS2",
      //   data: [8, 4, 3, 11, 10, 2, 5],
      //   backgroundColor: "green",
      //   borderColor: "black",
      //   pointBorderColor: "green",
      //   fill: true,
      //   tension: 0.4,
      // },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "left" },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div>
      <div
        style={{
          paddingTop: "30px",
          width: "70%",
          margin: "0 auto",
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default Stat0;

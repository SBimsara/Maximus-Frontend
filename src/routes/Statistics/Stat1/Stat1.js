import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import Nav from "../navBar/Nav";

chartjs.register(ArcElement, Tooltip, Legend);

function Stat1() {
  const data = {
    labels: ["Subscribed", "Unsubscribed"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["black", "orange"],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "left" },
    },
  };
  return (
    <div>
      <Nav></Nav>
      <div
        style={{
          width: "45%",
          margin: "0 auto",
        }}
      >
        <Pie data={data} options={options}></Pie>
      </div>
    </div>
  );
}

export default Stat1;

import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import Nav from "../navBar/Nav";
import axios from "axios";

chartjs.register(ArcElement, Tooltip, Legend);

function Stat1() {
  const [chartData, setchartData] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/subscriptionStat/getPlanUserCount"
        );
        console.log(response);
        setchartData({
          labels: ["Free-Plan", "Bronze-Plan", "Silver-Plan", "Gold-Plan"],
          data: response.data.map((item) => item),
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data,
        backgroundColor: ["chartreuse", "darkorange", "DimGrey", "gold"],
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
    <div
      style={{
        width: "38%",
        margin: "0 auto",
      }}
    >
      <Pie data={data} options={options}></Pie>
    </div>
  );
}

export default Stat1;

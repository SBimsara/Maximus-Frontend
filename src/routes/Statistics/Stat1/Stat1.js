import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as chartjs, ArcElement, Tooltip, Legend, Title } from "chart.js";
import Nav from "../navBar/Nav";
import axios from "axios";
import { getData } from "../../../services/getData";

chartjs.register(ArcElement, Tooltip, Legend, Title);

function Stat1() {
  const url = "http://localhost:8080/api/v1/subscriptionStat/getPlanCount";

  const [chartData, setchartData] = useState({});

  useEffect(() => {
    const getChartData = async () => {
      try {
        const response = await getData(url);
        console.log(response);
        setchartData({
          labels: response.map((item) => item.planName),
          data: response.map((item) => item.count),
        });
      } catch (error) {
        console.log(error);
      }
    };
    getChartData();
  }, []);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "COUNT",
        data: chartData.data,
        backgroundColor: ["chartreuse", "darkorange", "DimGrey", "gold"],
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: true, position: "bottom" },
      title: {
        display: true,
        text: "User-Plan Distribution",
        font: {
          size: 21,
          weight: "bold",
        },
      },
    },
  };
  return (
    <div style={{ width: "38%", margin: " 0px auto", padding: "50px 50px" }}>
      <Pie style={{}} data={data} options={options}></Pie>
    </div>
  );
}

export default Stat1;

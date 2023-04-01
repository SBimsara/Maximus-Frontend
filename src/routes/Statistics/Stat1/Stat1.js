import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as chartjs, ArcElement, Tooltip, Legend, Title } from "chart.js";
import Nav from "../navBar/Nav";
import axios from "axios";

chartjs.register(ArcElement, Tooltip, Legend, Title);

function Stat1() {
  const [chartData, setchartData] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/subscriptionStat/getPlanCount"
          // "http://localhost:8080/api/v1/subscriptionStat/getPlanUserCount"
        );
        console.log(response);
        setchartData({
          labels: response.data.map((item) => item.planName),
          data: response.data.map((item) => item.count),
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
          size: 20,
          weight: "bold",
        },
      },
    },
  };
  return (
    <div style={{}}>
      <Pie
        style={{ width: "25%", margin: " 0px auto" }}
        data={data}
        options={options}
      ></Pie>
    </div>
  );
}

export default Stat1;

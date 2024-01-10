import React, { useEffect, useRef, useState } from "react";
import Navbar1 from "./../../../components/Navbar1"

import { Chart, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
  TimeScale,
} from "chart.js";
import "./Stat0.style.css";
import { getData } from "../../../services/getData";

ChartJS.register(
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Tooltip,
  Legend,
  Filler,
  TimeScale
);

function Stat0() {
  const url = "http://localhost:8080/api/v1/userStat/getRegUserCount";

  const groupedData = async (url) => {
    try {
      const response = await getData(url);
      console.log(response);
      setchartData({
        labels: response.map((item) => item.date),
        data: response.map((item) => item.count),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [chartData, setchartData] = useState({});
  useEffect(() => {
    groupedData(url);
  }, []);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "COUNT",
        data: chartData.data,
        //backgroundColor: "Lightgray",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: "3",
        //pointBorderColor: "Orange",
        pointBackgroundColor: "Black",
        fill: true,
        backgroundColor: "#E9FDFF",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "left" },
      title: {
        display: true,
        text: "Total Registered User Count Over Time",
        font: {
          size: 21,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
    },
  };

  function handleEvent(e) {
    const months = e.target.value;
    if (months == 0) {
      groupedData(url);
    } else {
      const url1 = `http://localhost:8080/api/v1/userStat/getRegUserCountbyMonths/${months.toString()}`;
      groupedData(url1);
    }
  }

  return (
    
    <div>
       
    
      <select
        //className="selectButton"
        class="form-select"
        aria-label="Default select example"
        style={{
          marginLeft: "250px",
          marginRight: "750px",
          width: "125px",
          height: "38px",
        }}
        onChange={(e) => {
          handleEvent(e);
        }}
      >
        <option value="">-- Select --</option>
        <option value="1">1 Month</option>
        <option value="3">3 Months</option>
        <option value="6">6 Months</option>
        <option value="12">1 Year</option>
        <option value="0">All</option>
      </select>

      <div
        style={{
          paddingTop: "25px",
          width: "65%",
          margin: "0px auto",
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default Stat0;

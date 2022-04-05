import React from "react";
import { Card } from "react-bootstrap";
import Chart from "react-apexcharts";

const PieChart = (props) => {
  const { title, labels, series, pieWidth } = props;
  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div>
      <h6>{title}</h6>
      <Chart options={options} series={series} type="pie" width={pieWidth} />
    </div>
  );
};

export default PieChart;

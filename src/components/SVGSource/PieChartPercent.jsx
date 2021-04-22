import React, { useEffect } from "react";
import "./PieChartPercent.sass";

const PieChartPercent = (props) => {
  const pieData = props.pieData ? props.pieData : [];
  const drawPieChart = () => {
    const pieItem = document.getElementsByClassName("pieChart__item");
    if (pieData.length > 0 && pieItem[0]) {
      const sumData = pieData.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.number;
      }, 0);
      const circumference = Math.ceil(
        3.1415926 * pieItem[0].parentNode.offsetWidth
      );
      let dashoffset = 0;
      for (let i in pieData) {
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        circle.setAttribute("r", 16);
        circle.setAttribute("cx", 16);
        circle.setAttribute("cy", 16);
        circle.setAttribute("class", "pieChart__circle");
        const circleStyle = `stroke: ${pieData[i].color}; stroke-dasharray: ${
          (pieData[i].number / sumData) * circumference
        } ${circumference}; stroke-dashoffset: ${dashoffset}`;
        dashoffset = dashoffset - (pieData[i].number / sumData) * 100;
        circle.style = circleStyle;
        pieItem[0].appendChild(circle);
      }
    }
  };
  useEffect(drawPieChart, []);
  return (
    <div className="pieChart">
      <div className="pieChart__wrapper">
        <svg className="pieChart__item" viewBox="0 0 32 32"></svg>
      </div>
    </div>
  );
};
export default PieChartPercent;

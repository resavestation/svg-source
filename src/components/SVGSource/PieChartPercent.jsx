import React, { useEffect } from "react";
import "./PieChartPercent.sass";

const PieChartPercent = (props) => {
  // 輸入數字資料及顏色資料，產生圓餅圖
  const pieData = props.pieData ? props.pieData : [];
  const drawPieChart = async () => {
    const pieItem = document.getElementsByClassName("pieChart__item");
    if (pieData.length > 0) {
      const sumData = pieData.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.number;
      }, 0);
      let dashoffset = 0;
      for (let i in pieData) {
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        circle.setAttribute("r", 16);
        circle.setAttribute("cx", 16);
        circle.setAttribute("cy", 16);
        circle.setAttribute = ("class", "pieChart__circle");
        const circleStyle = `stroke: ${pieData[i].color}; stroke-dasharray: ${
          (pieData[i].number / sumData) * 100
        } 100; stroke-dashoffset: ${dashoffset}`;
        dashoffset = dashoffset - (pieData[i].number / sumData) * 100;
        //circle.setAttribute("style", circleStyle);
        pieItem[0].appendChild(circle);
      }
      //document.body.appendChild(pieList);
    }
  };
  useEffect(drawPieChart, []);
  return (
    <div className="pieChart">
      <div className="pieChart__wrapper">
        <svg className="pieChart__item" viewBox="0 0 32 32">
          <circle className="pieChart__circle" r="16" cx="16" cy="16" />
        </svg>
      </div>
    </div>
  );
};
export default PieChartPercent;

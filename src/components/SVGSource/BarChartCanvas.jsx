import React, { useEffect } from "react";

const BarChartCanvas = (props) => {
  const barData = props.barData ? props.barData : [];
  const barChartInit = () => {
    const canvasWrapper = document.getElementsByClassName(
      "canvasBarChart__wrapper"
    );
    if (canvasWrapper[0]) {
      const canvasElem = document.createElement("canvas");
      const wrapperWidth = canvasWrapper[0].offsetWidth;
      const sumData = barData.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.value;
      }, 0);
      const maxData = barData.reduce((accumulator, currentValue) => {
        if (currentValue.value >= accumulator) return currentValue.value;
        else return accumulator;
      }, 0);
      const unitWidth = wrapperWidth / barData.length;
      const unitHeight = (1 / sumData) * unitWidth * 10;
      const wrapperHeight = maxData * unitHeight;
      canvasElem.setAttribute("width", wrapperWidth);
      canvasElem.setAttribute("height", wrapperHeight);
      drawBarChart(canvasElem, unitWidth, unitHeight, wrapperHeight);
      canvasWrapper[0].appendChild(canvasElem);
    }
  };
  const drawBarChart = (item, unitWidth, unitHeight, wrapperHeight) => {
    var c = item;
    var ctx = c.getContext("2d");
    let offsetX = 0;
    for (let i = 0; i < barData.length; i++) {
      const barHeight = barData[i].value * unitHeight;
      ctx.fillStyle = barData[i].color;
      ctx.fillRect(offsetX, wrapperHeight - barHeight, unitWidth, barHeight);
      ctx.font = "14px Arial";
      ctx.fillStyle = "#333";
      const text = barData[i].name + barData[i].value;
      ctx.fillText(text, offsetX + unitWidth / 4, wrapperHeight - 14);
      offsetX = offsetX + unitWidth;
    }
  };
  useEffect(barChartInit, []);
  return (
    <div className="canvasBarChart">
      <div className="canvasBarChart__wrapper"></div>
    </div>
  );
};
export default BarChartCanvas;

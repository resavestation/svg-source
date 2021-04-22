import React, { useEffect } from "react";

const BarChartCanvas = (props) => {
  const barChartInit = () => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 75, 50);

    //Turn transparency on
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 75, 50);
    ctx.fillStyle = "green";
    ctx.fillRect(80, 80, 75, 50);
  };
  useEffect(barChartInit, []);
  return (
    <canvas id="myCanvas">Your browser does not support the canvas tag.</canvas>
  );
};
export default BarChartCanvas;

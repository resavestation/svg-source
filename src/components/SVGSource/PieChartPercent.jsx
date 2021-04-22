import React from "react";
import "./PieChartPercent.sass";

const PieChartPercent = () => {
  return (
    <svg className="svgCircle" viewBox="0 0 32 32">
      <circle className="circle1" r="16" cx="16" cy="16" />
      <text x="8" y="8" fill="red">
        I love SVG
      </text>
      <circle className="circle2" r="16" cx="16" cy="16" />
      <circle className="circle3" r="16" cx="16" cy="16" />
      <circle className="circle4" r="16" cx="16" cy="16" />
    </svg>
  );
};
export default PieChartPercent;

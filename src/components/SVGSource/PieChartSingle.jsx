import React, { useState } from "react";
import "./PieChartSingle.sass";

const PieChartSingle = () => {
  const radius = 90;
  const [deg, setDeg] = useState(0);
  const [strokeDashoffset, setStrokeDashoffset] = useState(
    2 * radius * Math.PI
  );
  const setdeg = (value) => {
    const percent = value * 0.01;
    const perimeter = 2 * radius * Math.PI;
    const newStrokeDashoffset = perimeter * (1 - percent);
    setDeg(value);
    setStrokeDashoffset(newStrokeDashoffset);
  };
  return (
    <div className="circleBox">
      <svg
        id="svg"
        width="300"
        height="280"
        viewport="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          id="circle"
          r={radius}
          cx="150"
          cy="150"
          fill="transparent"
          strokeDasharray={2 * radius * Math.PI}
          strokeDashoffset="0"
        />
        <circle
          id="bar"
          r={radius}
          cx="150"
          cy="150"
          fill="transparent"
          strokeDasharray={2 * radius * Math.PI}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90, 150, 150)"
        />
        <circle
          id="bar"
          r={radius}
          cx="150"
          cy="150"
          fill="transparent"
          strokeDasharray={2 * radius * Math.PI}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90, 150, 150)"
        />
      </svg>
      <div>
        <p>輸入設定百分比</p>
        <input value={deg} onChange={(e) => setdeg(e.target.value)} />
      </div>
    </div>
  );
};
export default PieChartSingle;

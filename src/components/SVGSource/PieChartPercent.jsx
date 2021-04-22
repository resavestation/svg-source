import React from "react";
import "./PieChartPercent.sass";

const PieChartPercent = (props) => {
  return (
    <div className="pieChart">
      <div className="pieChart__wrapper">
        <svg className="pieChart__list" viewBox="0 0 32 32">
          <circle
            className="pieChart__circle pieChart__circle--1"
            r="16"
            cx="16"
            cy="16"
          />
          <circle
            className="pieChart__circle pieChart__circle--2"
            r="16"
            cx="16"
            cy="16"
          />
          <circle
            className="pieChart__circle pieChart__circle--3"
            r="16"
            cx="16"
            cy="16"
          />
          <circle
            className="pieChart__circle pieChart__circle--4"
            r="16"
            cx="16"
            cy="16"
          />
        </svg>
      </div>
    </div>
  );
};
export default PieChartPercent;

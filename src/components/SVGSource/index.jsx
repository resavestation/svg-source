import React from "react";
import { Row, Col } from "antd";
import PieChartSingle from "./PieChartSingle";
import PieChartPercent from "./PieChartPercent";

const SVGSource = () => {
  const pieData = [
    {
      color: "#8bfdfc",
      number: 1,
    },
    {
      color: "#46a2f7",
      number: 1,
    },
    {
      color: "#3f74f7",
      number: 1,
    },
    {
      color: "#3e44ff",
      number: 1,
    },
    {
      color: "#127e41",
      number: 1,
    },
  ];
  /**
   * var reducePlus = pieData.reduce((accumulator, currentValue) => {
  // 分別為前一個回傳值, 目前值, 當前索引值
  return accumulator + currentValue.nubmer;  // 與前一個值相加
}, 0);              
   */
  return (
    <div className="source">
      <div className="source__wrapper">
        <Row>
          {/* SVG */}
          <Col span={24}>
            <PieChartSingle />
          </Col>
          <Col span={24}>
            {/* 修改成會自己長成框框寬度100%，所以測試時寫死一個寬 */}
            <div style={{ width: "250px", marginTop: "5%" }}>
              <PieChartPercent pieData={pieData} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SVGSource;

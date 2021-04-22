import React from "react";
import { Row, Col } from "antd";
//import PieChartSingle from "./PieChartSingle";
//import PieChartPercent from "./PieChartPercent";
//import PieChartPercentCanvas from "./PieChartPercentCanvas";
import BarChartCanvas from "./BarChartCanvas";

const SVGSource = () => {
  const pieData = [
    {
      color: "#8bfdfc",
      value: 1,
    },
    {
      color: "#46a2f7",
      value: 1,
    },
    {
      color: "#3f74f7",
      value: 1,
    },
    {
      color: "#3e44ff",
      value: 1,
    },
    {
      color: "#127e41",
      value: 1,
    },
  ];
  const pieData2 = [
    {
      name: "漢堡",
      value: 245,
      color: "#8bfdfc",
    },
    {
      name: "薯條",
      value: 512,
      color: "#46a2f7",
    },
    {
      name: "雞塊",
      value: 215,
      color: "#3f74f7",
    },
    {
      name: "炸雞",
      value: 185,
      color: "#3e44ff",
    },
    {
      name: "可樂",
      value: 158,
      color: "#127e41",
    },
  ];
  return (
    <div className="source">
      <div className="source__wrapper">
        <Row>
          {/* SVG */}
          <Col span={24}>{/*
            <PieChartSingle />
            */}</Col>
          <Col span={24}>
            {/* 修改成會自己長成框框寬度100%，所以測試時寫死一個寬 */}
            {/*
            <div style={{ width: "250px", marginTop: "5%" }}>
              <PieChartPercent pieData={pieData} />
            </div>
            */}
          </Col>
          {/* Canvas */}
          <Col span={24}>
            {/* 修改成會自己長成框框寬度100%，所以測試時寫死一個寬 */}
            {/*
            <div style={{ marginTop: "5%" }}>
              <PieChartPercentCanvas pieData={pieData2} />
            </div>
            */}
          </Col>
          <Col span={24}>
            <div style={{ marginTop: "5%" }}>
              <BarChartCanvas barData={pieData2} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SVGSource;

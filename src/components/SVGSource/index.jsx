import React from "react";
import { Row, Col } from "antd";
import PieChartSingle from "./PieChartSingle";
import PieChartPercent from "./PieChartPercent";

const SVGSource = () => {
  return (
    <div className="svgSource">
      <div className="svgSource__wrapper">
        <Row>
          <Col span={24}>
            <PieChartSingle />
          </Col>
          <Col span={24}>
            <PieChartPercent />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SVGSource;

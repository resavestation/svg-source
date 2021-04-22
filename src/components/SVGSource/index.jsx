import React from "react";
import { Row, Col } from "antd";
import PieChartSingle from "./PieChartSingle";
import PieChartPercent from "./PieChartPercent";

const SVGSource = () => {
  return (
    <div className="source">
      <div className="source__wrapper">
        <Row>
          <Col span={24}>
            {/* SVG */}
            <PieChartSingle />
          </Col>
          <Col span={24}>
            {/* SVG */}
            <PieChartPercent />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SVGSource;

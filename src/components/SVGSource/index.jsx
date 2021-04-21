import React from "react";
import { Row, Col } from "antd";
import PieChartSingle from "./PieChartSingle";

const SVGSource = () => {
  return (
    <div className="svgSource">
      <div className="svgSource__wrapper">
        <Row>
          <Col span={24}>
            <PieChartSingle />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SVGSource;

import React from "react";
import { Row, Col } from "antd";
import PieChart1 from "./PieChart1";

const SVGSource = () => {
  return (
    <div className="svgSource">
      <div className="svgSource__wrapper">
        <Row>
          <Col span={24}>
            <PieChart1 />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SVGSource;

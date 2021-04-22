import React from "react";
import { Row, Col } from "antd";
import PieChartSingle from "./PieChartSingle";
import PieChartPercent from "./PieChartPercent";

const SVGSource = () => {
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
              <PieChartPercent />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SVGSource;

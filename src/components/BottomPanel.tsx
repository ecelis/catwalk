import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BottomPanel = ({ ctx }: any) => {
  console.log(ctx);
  return (
    <Row styles={{ borderTop: "thin solid black" }}>
      <Col>TODO bottom panel for piano roll</Col>
    </Row>
  );
};

export default BottomPanel;

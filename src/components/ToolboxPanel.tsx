import React from "react";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

const ToolboxPanel = ({ ctx }: any) => {
  return (
    <Col>
      {" "}
      <Stack gap={3}>
        <div className="p-2">First item</div>
        <div className="p-2">Second item</div>
        <div className="p-2">Third item</div>
      </Stack>
    </Col>
  );
};

export default ToolboxPanel;

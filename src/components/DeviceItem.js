import React from "react";

import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star.png";

const DeviceItem = ({ device }) => {
  return (
    <Col md={3} className="mt-2">
      <Card style={{ width: 150, cursor: "pointer" }} border="light">
        <Image width={150} height={150} src={device.img} />
        <div className="text-black-50 d-flex justify-content-between align-items-center mt-2">
          <div>Gibson...</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={20} height={20} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;

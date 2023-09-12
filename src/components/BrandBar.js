import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card, Col, Row } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Col md={2} >
          <Card
            style={{ cursor: "pointer" }}
            border={brand.id === device.selectedBrand.id ? "dark" : "light"}
            onClick={() => device.setSelectedBrand(brand)}
            key={brand.id}
            className="p-2 ms-auto"
          >
            {brand.name}
          </Card>
          
        </Col>
      ))}
    </Row>
  );
});

export default BrandBar;

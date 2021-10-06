import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import serviceImg1 from "../../assets/images/1.png";
import serviceImg2 from "../../assets/images/2.png";
import serviceImg3 from "../../assets/images/3.png";
import serviceImg4 from "../../assets/images/4.png";
import serviceImg5 from "../../assets/images/5.png";
import serviceImg6 from "../../assets/images/6.png";
import serviceImg7 from "../../assets/images/7.png";
import serviceImg8 from "../../assets/images/8.png";
import serviceImg9 from "../../assets/images/9.png";

export const ServiceContainer = () => (
  <div className="services-fluid">
    <Row className="mb-3">
      <Col md="4">
        <img src={serviceImg1} className="img-fluid" />
      </Col>
      <Col md="4">
        <img src={serviceImg2} className="img-fluid" />
      </Col>
      <Col md="4">
        <img src={serviceImg3} className="img-fluid" />
      </Col>
    </Row>

    <Row className="mb-3">
      <Col md="4">
        <img src={serviceImg4} className="img-fluid" />
      </Col>
      <Col md="4">
        <img src={serviceImg5} className="img-fluid" />
      </Col>
      <Col md="4">
        <img src={serviceImg6} className="img-fluid" />
      </Col>
    </Row>

    <Row className="mb-3">
      <Col md="4">
        <img src={serviceImg7} className="img-fluid" />
      </Col>
      <Col md="4">
        <img src={serviceImg8} className="img-fluid" />
      </Col>
      <Col md="4">
        <img src={serviceImg9} className="img-fluid" />
      </Col>
    </Row>
  </div>
);

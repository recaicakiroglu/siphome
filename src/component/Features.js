import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import { Link } from "react-router-dom";
import Img from "../assets/images/illustation.png";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";

export default class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-features" id="features">
          <Container>
            <Row>
              <Col lg="12">
                <div className="title-box">
                  <p style={{ color: "#606C84" }} className="text-md-left">
                    Every day your home faces countless potential threats. Every
                    day you face countless potential headaches. A small problem
                    can become a major disaster. Early warning signs exist but
                    often you can't hear or see them.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center mt-5">
              <Col lg={6}>
                <img src={Img} className="img-fluid" alt="" />
              </Col>
              <Col lg={6}>
                <Row>
                  <div className="title-box-header">
                    <h5>Features</h5>
                  </div>
                  <h1>Meet Siphome</h1>
                  <p className="text-md-left mt-3 mb-5">
                    The most comprehensive smart solution to home maintenance.
                    All it takes is a simple and affordable sensor installation
                    by one of our Siphome certified technicians.
                  </p>
                </Row>

                <Row>
                  <Col lg={6}>
                    <img src={icon1} className="img-fluid mb-4" alt="" />
                    <h5>Automatic Threat Detection</h5>
                    <p className="text-sm-left">
                      Siphome reacts the moment your equipment fails, alerting
                      you to the problem.
                    </p>
                  </Col>
                  <Col lg={6}>
                    <img src={icon2} className="img-fluid mb-4" alt="" />
                    <h5>Smart Diagnostics</h5>
                    <p className="text-sm-left">
                      See exactly what is malfunctioning and compare your
                      maintenance options on the same screen.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <img src={icon3} className="img-fluid mb-4" alt="" />
                    <h5>Disaster Prevention</h5>
                    <p className="text-sm-left">
                      Predictive analytics lets you see what needs maintenance
                      before it fails.
                    </p>
                  </Col>
                  <Col lg={6}>
                    <img src={icon4} className="img-fluid mb-4" alt="" />
                    <h5>24/7 Service​</h5>
                    <p className="text-sm-left">
                      Siphome monitors your critical systems 24/7 so you can
                      enjoy peace of mind.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

//import images
import updateImg from "../assets/images/updates.png";

import icon5 from "../assets/images/icon5.png";
import icon6 from "../assets/images/icon6.png";
import icon7 from "../assets/images/icon7.png";
import icon8 from "../assets/images/icon8.png";

export default class Update extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-updates">
          <Container>
            <Row className="align-items-center">
              <Col lg={7}>
                <div className="home-img">
                  <Row>
                    <div className="title-box-header">
                      <h5>Update</h5>
                    </div>
                    <h1>
                      It starts with an <br /> upgrade
                    </h1>
                  </Row>
                  <img src={updateImg} className="img-fluid" alt="" />
                </div>
              </Col>
              <Col lg={5}>
                <div className="mt-4 offset-lg-2">
                  <Row>
                    <Col lg={2}>
                      <img src={icon5} className="img-fluid mb-4" alt="" />
                    </Col>
                    <Col lg={10}>
                      <h4 className="text-white">Monitor</h4>
                      <p className="text-md-left text-white">
                        Make your standard systems smart with Siphome. A simple
                        installation or integration and we can start to monitor
                        24/7 to make sure your home is Siphome.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={2}>
                      <img src={icon6} className="img-fluid mb-4" alt="" />
                    </Col>
                    <Col lg={10}>
                      <h4 className="text-white">Maintenance</h4>
                      <p className="text-md-left text-white">
                        Siphome helps you maintain your home. The HomeHealth
                        Record ensures you have the right information at the
                        right time, and if you aren’t able to do the maintenance
                        yourself, we can connect you to a service pro to help.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={2}>
                      <img src={icon7} className="img-fluid mb-4" alt="" />
                    </Col>
                    <Col lg={10}>
                      <h4 className="text-white">Repair</h4>
                      <p className="text-md-left text-white">
                        Siphome empowers you with smart notifications so you can
                        make repairs before they become problems. Notifications
                        provide diagnostics and recommended next actions so you
                        know what to do and have the same information as your
                        service pro.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={2}>
                      <img src={icon8} className="img-fluid mb-4" alt="" />
                    </Col>
                    <Col lg={10}>
                      <h4 className="text-white">Replace</h4>
                      <p className="text-md-left text-white">
                        Improve your home over time. Build your next-gen smart
                        home with Siphome’s advice along the way.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

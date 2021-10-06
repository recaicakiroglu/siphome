import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class FooterLink extends Component {
  render() {
    return (
      // Footer Link start
      <Row>
        <Col lg={12}>
          <div className="text-center mt-5">
            <p className="mb-0" style={{ color: "#606C84" }}>
              Copyright© 2020. Siphome Smart home LLC.
            </p>
          </div>
        </Col>
      </Row>
      //   Footer Link End
    );
  }
}

export default FooterLink;

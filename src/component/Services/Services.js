import React, { Component } from "react";
import { Carousel, Col, Container, Row } from "reactstrap";

import Home from "../../assets/images/home.png";
import { ServiceCarousel } from "./ServiceCarousel";
import { ServiceContainer } from "./ServiceContainer";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmall: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ isSmall: window.innerWidth <= 992 });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-services" id="services">
          <Container>
            <Row>
              <Col lg="12">
                <div className="text-center">
                  <div className="title-box-header">
                    <h5>Services</h5>
                  </div>
                  <h2 className="title-heading">
                    Bring more systems into the network
                  </h2>

                  <p className="text-muted f-17 mt-3">
                    Find out just how far Siphome can lead your home into
                    next-gen intelligence.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <div className="text-center">
                  <img src={Home} className="img-fluid mt-5 mb-5" alt="Home" />
                </div>
              </Col>
            </Row>

            {/*       <ServiceContainer/> */}

            {this.state.isSmall ? <ServiceCarousel /> : <ServiceContainer />}
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "react-router-dom";

import people1 from "../assets/images/testimonial-1.png";
import people2 from "../assets/images/testimonial-2.png";
import people3 from "../assets/images/testimonial-3.png";

export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-testimonials" id="testimonials">
          <Container>
            <Row>
              <Col lg="12">
                <div className="text-center">
                  <div className="title-box-header">
                    <h5>Testimonials</h5>
                  </div>
                  <h2>
                    Let’s see what people says <br />
                    about Siphome
                  </h2>
                </div>
              </Col>
            </Row>

            <Row>
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
              >
                <div>
                  <img src={people1} />
                  <div className="myCarousel">
                    <h3>Shirley Fultz</h3>
                    <h4>CEO JobDesk United, LLC</h4>
                    <p>
                      Thank you for introducing me to Siphome! We like how the
                      system gives updates to us and the homeowner as well to
                      give us a real time update on how everything is working.
                    </p>
                  </div>
                </div>

                <div>
                  <img src={people2} />
                  <div className="myCarousel">
                    <h3>Daniel Keystone</h3>
                    <h4>Design Manager Kiluna</h4>
                    <p>
                      We have been waiting on this product and now that we have
                      installed a few. We think it will make the industry by
                      storm.
                    </p>
                  </div>
                </div>

                <div>
                  <img src={people3} />
                  <div className="myCarousel">
                    <h3>Theo Sorel</h3>
                    <h4>Designer</h4>
                    <p>
                      I enjoy catching up with Fetch on my laptop, or on my
                      phone when I'm on the go!
                    </p>
                  </div>
                </div>
              </Carousel>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

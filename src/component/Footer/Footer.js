import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Input } from "reactstrap";

import FooterLink from "./FooterLink";
import logo from "../../assets/images/logoBlue.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          id: 1,
          title: "Navigation",
          child: [
            { title: "Home", link: "#" },
            { title: "Features", link: "#" },
            { title: "Services", link: "#" },
            { title: "Testimonials", link: "#" },
            { title: "We Care", link: "#" },
            { title: "Idea Exchange", link: "#" },
          ],
        },
        {
          id: 2,
          title: "About",
          child: [
            { title: "Contact Us", link: "#" },
            { title: "Privacy & Policy", link: "#" },
            { title: "Terms & Conditions", link: "#" },
            { title: "FAQ", link: "#" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className="section bg-footer pt-0 pb-5 mb-0 mt-0">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="footer-info mt-4">
                  <div className="navbar-brand logo text-uppercase mb-3">
                    <img src={logo} alt="" height="30" />
                  </div>
                  <h5>Siphome,LLC</h5>
                  <p className="text-muted mt-1 mb-2">
                    The New Building 2320 Lang Avenue,
                    <br />
                    Park Valley, Utah,
                    <br />
                    United States. <br />
                    84329
                  </p>
                  <div className="team-social mt-4 pt-2">
                    <p className="text-muted mt-1 mb-2">
                      P: +1 176 909 2900
                      <br />
                      E: siphome@gmail.com
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={8}>
                <Row className="pl-0 md-lg-5">
                  {/* Render Footer Link */}
                  {this.state.links.map((item, key) => (
                    <Col md={4} key={key}>
                      <div className="mt-4">
                        <h5 className="f-20">{item.title}</h5>
                        <ul className="list-unstyled footer-link">
                          {item.child.map((linkItem, key) => (
                            <li key={key}>
                              <Link to={linkItem.link}>{linkItem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  ))}
                  <Col md={4}>
                    <div className="mt-4">
                      <h5 className="f-20">Stay Connected</h5>
                      <ul className="list-unstyled footer-link">
                        <li>
                          <i className="mdi mdi-facebook"></i>
                          <Link>Facebook</Link>
                        </li>
                        <li>
                          <i className="mdi mdi-twitter"></i>
                          <Link>Twitter</Link>
                        </li>
                        <li>
                          <i className="mdi mdi-instagram"></i>
                          <Link>Instagram</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* Render Footer Link End */}
            <FooterLink />
          </Container>
        </footer>
        {/* Footer End */}
      </React.Fragment>
    );
  }
}

export default Footer;

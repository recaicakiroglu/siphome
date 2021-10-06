import React, { Component } from "react";

import {
  Col,
  Container,
  Dropdown,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import contantImg from "../assets/images/illustration-2.png";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-contact" id="contact">
          <Container>
            <Row className="mt-5 pt-4">
              <Col className="contant-intro" lg={6}>
                <Row>
                  <div className="title-box-header">
                    <h5>Contact</h5>
                  </div>
                  <h3>
                    Skip logging in, <br />
                    get what you need <br />
                    with a few key details
                  </h3>
                </Row>
                <Row>
                  <div className="mt-4 home-img">
                    <img src={contantImg} className="img-fluid" alt="" />
                  </div>
                </Row>
              </Col>
              <Col lg={4}>
                <div className="custom-form mt-4 mx-auto">
                  <Form method="post" name="contact-form" id="contact-form">
                    <Row>
                      <Col lg={12}>
                        <FormGroup className="mt-3">
                          <h6>Your Name (required)</h6>
                          <Input
                            placeholder="Enter name"
                            name="name"
                            id="name"
                            className="form-control"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup className="mt-3">
                          <h6>Email (required)</h6>
                          <Input
                            placeholder="Enter email"
                            name="email"
                            id="email"
                            className="form-control"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup className="mt-3">
                          <h6>Subject</h6>
                          <Input
                            placeholder="Enter subject"
                            name="Subject"
                            id="Subject"
                            className="form-control"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup className="mt-3">
                          <h6>Select Job</h6>
                          <Dropdown className="form-dropdown-contact">
                            <DropdownToggle caret>Please Select</DropdownToggle>
                          </Dropdown>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup className="mt-3">
                          <h6>Company Name</h6>
                          <Input
                            placeholder="Enter company name"
                            name="companyName"
                            id="companyName"
                            className="form-control"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup className="mt-3">
                          <h6>Message</h6>
                          <Input
                            placeholder="Enter message"
                            type="textarea"
                            name="comments"
                            id="comments"
                            rows="3"
                            className="form-control"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} className="mt-3 text-right">
                        <Input
                          id="submit"
                          name="send"
                          color="primary"
                          className="submitBnt btn btn-primary btn-round"
                          value="Send Now"
                          type="submit"
                          style={{ width: "auto", color: "#fff" }}
                        />
                        <div id="simple-msg"></div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

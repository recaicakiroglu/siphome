import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import largeImg from '../../assets/images/intro.png';



class Section extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-home" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div className="home-content">

                      <h1 className="home-title mt-4">Imagine your <br /> home smart enough <br /> <span style={{color:"#1ECE7A"}}> to take care </span> of itself.</h1>
                      <p className="text-title-muted mt-4 f-20">Turn your home into a smarthome today with a simple & <br />
affordable upgrade. Discover the upgrade that automates <br />
home maintenance.</p>
                      <div className="mt-4 pt-2">
                        <Link to="#" className="btn btn-primary mr-3">Get Started</Link>{" "}
                        <Link to="#" className="btn btn-outline-primary">Learn More</Link>{" "}
                      </div>
                      
                    </div>
                  </Col>
                  <Col lg={6}>
                  <img src={largeImg} className="img-fluid d-none d-lg-block" alt="" />
                  </Col>
                </Row>
              </Container>
            </div>
    
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;



import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import ScrollspyNav from "./Scrollspy";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    let targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <Navbar
          expand="lg"
          className="navbar-custom sticky sticky-dark"
          id="navbar"
        >
          <Container>
            <NavbarBrand className="navbar-brand logo text-uppercase" href="/">
              <img src={logo} alt="" height="30" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <Link to="#" className="btn btn-outline-primary">
                Menu
              </Link>{" "}
            </NavbarToggler>
            <Collapse
              id="navbarCollapse"
              isOpen={this.state.isOpenMenu}
              className=" navbar-collapse"
            >
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="200"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav
                  className="navbar-nav ml-auto navbar-center"
                  id="navbar-navlist"
                >
                  {this.props.navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink
                        className={item.navheading === "Home" ? "active" : ""}
                        href={"#" + item.idnm}
                      >
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </ScrollspyNav>
              <ul className="navbar-nav navbar-center">
                <li className="nav-item">
                  <Link to="/Login" className="nav-link">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item d-inline-block d-lg-none">
                  <Link to="/getStarted" className="nav-link">
                    Get Started
                  </Link>
                </li>
              </ul>
              <div className="navbar-button d-none d-lg-inline-block">
                <Link
                  to="/getStarted"
                  className="btn btn-sm btn-soft-primary btn-round"
                >
                  Get Started
                </Link>
              </div>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
// }
export default NavbarPage;

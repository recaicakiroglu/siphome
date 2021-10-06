import React, { Component } from "react";

// Importing Section
import Navbar from "../../component/Navbar/Navbar";
import Section from "./Section";
import Features from "../../component/Features";
import Update from "../../component/Update";
import Services from "../../component/Services/Services";
import Testimonials from "../../component/Testimonials";
import Contact from "../../component/Contant";
import Footer from "../../component/Footer/Footer";


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 3, idnm: "features", navheading: "Features" },
        { id: 4, idnm: "services", navheading: "Services" },
        { id: 5, idnm: "contact", navheading: "Contact" },
        { id: 6, idnm: "faq", navheading: "FAQ" }
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
      fixTop : true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: false });
    }
  };

  render() {
    return (
      <React.Fragment>
          {/* Importing Navbar */}
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
            top={this.state.fixTop}
          />
          <Section/>
          <Features/>
          <Update/>
          <div className="bg-gradient-gray">
          <Services/>
          <Testimonials/>
          </div>
          <Contact/>
          <Footer/>
      </React.Fragment>
    );
  }
}
export default Layout;

import React from "react";

import { Row } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

import serviceImg1 from "../../assets/images/1.png";
import serviceImg2 from "../../assets/images/2.png";
import serviceImg3 from "../../assets/images/3.png";
import serviceImg4 from "../../assets/images/4.png";
import serviceImg5 from "../../assets/images/5.png";
import serviceImg6 from "../../assets/images/6.png";
import serviceImg7 from "../../assets/images/7.png";
import serviceImg8 from "../../assets/images/8.png";
import serviceImg9 from "../../assets/images/9.png";

export const ServiceCarousel = () => {
  return (
    <Row>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div className="myCarouselImage">
          <img src={serviceImg1} />
        </div>
        <div className="myCarouselImage">
          <img src={serviceImg2} />
        </div>
        <div className="myCarouselImage">
          <img src={serviceImg3} />
        </div>
        <div className="myCarouselImage">
          <img src={serviceImg4} />
        </div>
        <div className="myCarouselImage">
          <img src={serviceImg5} />
        </div>
        <div className="myCarouselImage">
          <img src={serviceImg6} />
        </div>
        <div className="myCarouselImage">
          <img src={serviceImg7} />
        </div>
        <div className="myCarouselImage">
          <img src={serviceImg8} />
        </div>
        <div className="myCarouselImage">
          <img src={serviceImg9} />
        </div>
      </Carousel>
    </Row>
  );
};

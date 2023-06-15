import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

export default function Gallery() {
  return (
    <div>
      <Carousel
        style={{ paddingRight: 80, paddingLeft: 80 }}
        prevIcon={
          <ChevronDoubleLeftIcon
            color="#dfe667"
            width={40}
            style={{ marginRight: 20 }}
          />
        }
        nextIcon={
          <ChevronDoubleRightIcon
            color="#dfe667"
            width={40}
            style={{ marginLeft: 20 }}
          />
        }
      >
        <Carousel.Item>
          <img
            style={{ borderRadius: 50 }}
            className="d-block w-100"
            src={require("./1.PNG")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ borderRadius: 50 }}
            className="d-block w-100"
            src={require("./2.PNG")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ borderRadius: 50 }}
            className="d-block w-100"
            src={require("./3.PNG")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ borderRadius: 50 }}
            className="d-block w-100"
            src={require("./4.PNG")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ borderRadius: 50 }}
            className="d-block w-100"
            src={require("./5.PNG")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ borderRadius: 50 }}
            className="d-block w-100"
            src={require("./6.PNG")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ borderRadius: 50 }}
            className="d-block w-100"
            src={require("./7.PNG")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

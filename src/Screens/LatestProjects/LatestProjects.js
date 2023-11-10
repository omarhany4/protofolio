import React from "react";
import Navbar from "../../GlobalComponents/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Elmenus from "./ElmenusCard";
import Netflix from "./PortofolioCard";

export default function LatestProjects() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#11242f",
        height: "100vh",
      }}
    >
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1
            className="App"
            style={{
              marginTop: "3vh",
              color: "white",
              justifySelf: "center",
              fontSize: "4vw",
            }}
          >
            Latest <span style={{ color: "#54c2cc" }}>Projects</span>
          </h1>
        </Col>
      </Row>
      <Row
        style={{
          alignItems: "center",
          backgroundColor: "#11242f",
          justifyContent: "center",
        }}
      >
        <Col
          lg={{ offset: 1, span: 3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "20vm",
          }}
        >
          <fieldset
            style={{
              borderStyle: "solid",
              borderWidth: "0.3vw",
              borderColor: "#54c2cc",
              borderRadius: "1vw",
              display: "flex",
              flexDirection: "column",
              padding: "0.8vw",
              marginTop: "6vh",
            }}
          >
            <legend
              className="App"
              style={{
                color: "#54c2cc",
                marginTop: "-4vh",
                paddingLeft: "1.8vw",
                backgroundColor: "#11242f",
                width: "13vw",
                alignSelf: "center",
                fontSize: "1.3vw",
              }}
            >
              React Web App
            </legend>
            <Netflix />
          </fieldset>
        </Col>
        <Col
          lg={{ offset: 1, span: 3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "20vm",
          }}
        >
          <fieldset
            style={{
              borderStyle: "solid",
              borderWidth: "0.3vw",
              borderColor: "#54c2cc",
              borderRadius: "1vw",
              display: "flex",
              flexDirection: "column",
              padding: "0.8vw",
              marginTop: "6vh",
            }}
          >
            <legend
              className="App"
              style={{
                color: "#54c2cc",
                marginTop: "-4vh",
                paddingLeft: "1.8vw",
                backgroundColor: "#11242f",
                width: "15vw",
                alignSelf: "center",
                fontSize: "1.3vw",
              }}
            >
              React Android / IOS
            </legend>
            <Elmenus />
          </fieldset>
        </Col>
      </Row>
    </Container>
  );
}

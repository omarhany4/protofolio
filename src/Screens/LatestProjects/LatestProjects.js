import React from "react";
import Navbar from "../../GlobalComponents/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Elmenus from "./ElmenusCard";
import Netflix from "./NetflixCard";

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
              marginTop: "5%",
              color: "white",
              justifySelf: "center",
              fontSize: "400%",
            }}
          >
            Latest <span style={{ color: "#54c2cc" }}>Projects</span>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "4%", alignItems: "center" }} xs={1}>
        <Col
          xs={1}
          lg={{ offset: 1, span: 5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <fieldset
            style={{
              borderStyle: "solid",
              borderWidth: 10,
              borderColor: "#54c2cc",
              borderRadius: 30,
              display: "flex",
              flexDirection: "column",
              padding: 20,
            }}
          >
            <legend
              className="App"
              style={{
                color: "#54c2cc",
                marginTop: "-55px",
                paddingLeft: 35,
                backgroundColor: "#11242f",
                width: "75%",
                alignSelf: "center",
                fontSize: 36,
              }}
            >
              React Web App
            </legend>
            <Elmenus />
          </fieldset>
        </Col>
        <Col
          xs={1}
          lg={{ offset: 1, span: 5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <fieldset
            style={{
              borderStyle: "solid",
              borderWidth: 10,
              borderColor: "#54c2cc",
              borderRadius: 30,
              display: "flex",
              flexDirection: "column",
              padding: 20,
            }}
          >
            <legend
              className="App"
              style={{
                color: "#54c2cc",
                marginTop: "-55px",
                paddingLeft: 35,
                backgroundColor: "#11242f",
                width: "75%",
                alignSelf: "center",
                fontSize: 36,
              }}
            >
              React Native App
            </legend>
            <Elmenus />
          </fieldset>
        </Col>
      </Row>
    </Container>
  );
}

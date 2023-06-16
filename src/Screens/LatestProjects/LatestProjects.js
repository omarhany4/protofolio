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
      <Row style={{ marginTop: "8vh", alignItems: "center" }} xs={1}>
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
              borderWidth: "0.3vw",
              borderColor: "#54c2cc",
              borderRadius: "1vw",
              display: "flex",
              flexDirection: "column",
              padding: "0.8vw",
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
            <Elmenus />
          </fieldset>
        </Col>
        <Col
          xs={1}
          lg={{ offset: 0, span: 5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
            }}
          >
            <legend
              className="App"
              style={{
                color: "#54c2cc",
                marginTop: "-3.8vh",
                paddingLeft: "1.1vw",
                backgroundColor: "#11242f",
                width: "13vw",
                alignSelf: "center",
                fontSize: "1.3vw",
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

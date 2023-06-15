import React from "react";
import Navbar from "../../GlobalComponents/navbar";
import { motion } from "framer-motion";
import "../../App.css";

export default function skills() {
  return (
    <div
      style={{
        backgroundColor: "#11242f",
        height: "100vh",
        paddingBottom: "3%",
      }}
    >
      <Navbar />
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 style={{ marginTop: "5%", color: "white", fontSize: "400%" }}>
          My <span style={{ color: "#54c2cc" }}>Skills</span>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "15%",
          marginRight: "15%",
          marginTop: "3%",
        }}
      >
        <div className="progress-container">
          <h1
            className="App"
            style={{ marginBottom: "10%", alignSelf: "center", color: "white" }}
          >
            React <span style={{ color: "#54c2cc" }}>Js</span>
          </h1>
          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <h1 style={{ fontSize: 24 }}>Web development</h1>
            <h1 style={{ fontSize: 24 }}>95%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: 10,
                borderRadius: 5,
                width: "10%",
              }}
              animate={{ width: "90%" }}
              transition={{ duration: 2 }}
            ></motion.div>
          </div>
          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <h1 style={{ fontSize: 24 }}>Web development</h1>
            <h1 style={{ fontSize: 24 }}>95%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: 10,
                borderRadius: 5,
                width: "10%",
              }}
              animate={{ width: "90%" }}
              transition={{ duration: 2 }}
            ></motion.div>
          </div>
          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <h1 style={{ fontSize: 24 }}>Web development</h1>
            <h1 style={{ fontSize: 24 }}>95%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: 10,
                borderRadius: 5,
                width: "10%",
              }}
              animate={{ width: "90%" }}
              transition={{ duration: 2 }}
            ></motion.div>
          </div>
        </div>

        {/* the second card */}

        <div className="progress-container">
          <h1
            className="App"
            style={{ marginBottom: "10%", alignSelf: "center", color: "white" }}
          >
            React <span style={{ color: "#54c2cc" }}>Native</span>
          </h1>
          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <h1 style={{ fontSize: 24 }}>Web development</h1>
            <h1 style={{ fontSize: 24 }}>95%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: 10,
                borderRadius: 5,
                width: "10%",
              }}
              animate={{ width: "90%" }}
              transition={{ duration: 2 }}
            ></motion.div>
          </div>
          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <h1 style={{ fontSize: 24 }}>Web development</h1>
            <h1 style={{ fontSize: 24 }}>95%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: 10,
                borderRadius: 5,
                width: "10%",
              }}
              animate={{ width: "90%" }}
              transition={{ duration: 2 }}
            ></motion.div>
          </div>
          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <h1 style={{ fontSize: 24 }}>Web development</h1>
            <h1 style={{ fontSize: 24 }}>95%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: 10,
                borderRadius: 5,
                width: "10%",
              }}
              animate={{ width: "90%" }}
              transition={{ duration: 2 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

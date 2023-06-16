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
        <h1 style={{ marginTop: "3vh", color: "white", fontSize: "3vw" }}>
          My <span style={{ color: "#54c2cc" }}>Skills</span>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "15vw",
          marginRight: "15vw",
          marginTop: "8vh",
        }}
      >
        <div className="progress-container">
          <h1
            className="App"
            style={{ marginBottom: "10%", alignSelf: "center", color: "white" }}
          >
            Codding <span style={{ color: "#54c2cc" }}>Skills</span>
          </h1>
          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <h1 style={{ fontSize: 24 }}>HTML</h1>
            <h1 style={{ fontSize: 24 }}>80%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: 10,
                borderRadius: 5,
                width: "10%",
              }}
              animate={{ width: "80%" }}
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
            <h1 style={{ fontSize: 24 }}>CSS</h1>
            <h1 style={{ fontSize: 24 }}>80%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: 10,
                borderRadius: 5,
                width: "10%",
              }}
              animate={{ width: "80%" }}
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
            <h1 style={{ fontSize: 24 }}>JavaScript</h1>
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
              animate={{ width: "95%" }}
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
            Development <span style={{ color: "#54c2cc" }}>Skills</span>
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
              animate={{ width: "95%" }}
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
            <h1 style={{ fontSize: 24 }}>Mobile App development</h1>
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
              animate={{ width: "95%" }}
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
            <h1 style={{ fontSize: 24 }}>Graphic Design</h1>
            <h1 style={{ fontSize: 24 }}>80%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: 10,
                borderRadius: 5,
                width: "10%",
              }}
              animate={{ width: "80%" }}
              transition={{ duration: 2 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

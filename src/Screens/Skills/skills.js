import React from "react";
import Navbar from "../../GlobalComponents/navbar";
import { motion } from "framer-motion";
import "../../App.css";

export default function skills() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundColor: "#11242f",
      }}
    >
      <div
        className="App pt-24  "
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "white", fontSize: "3vw" }}>
          My <span style={{ color: "#54c2cc" }}>Skills</span>
        </h1>
      </div>
      <div
        className=" mx-12 my-8 lg:mx-32 xl:my-20"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="progress-container">
          <h1
            className="App text-xs lg:text-3xl xl:text-6xl"
            style={{
              marginBottom: "10%",
              alignSelf: "center",
              color: "white",
            }}
          >
            Coding <span style={{ color: "#54c2cc" }}>Skills</span>
          </h1>
          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <h1 style={{ fontSize: "1vw" }}>Next Js</h1>
            <h1 style={{ fontSize: "1vw" }}>80%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: "0.5vw",
                borderRadius: "0.25vw",
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
            <h1 style={{ fontSize: "1vw" }}>Tailwind CSS</h1>
            <h1 style={{ fontSize: "1vw" }}>80%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: "0.5vw",
                borderRadius: "0.25vw",
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
            <h1 style={{ fontSize: "1vw" }}>Firebase</h1>
            <h1 style={{ fontSize: "1vw" }}>95%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: "0.5vw",
                borderRadius: "0.25vw",
                width: "10%",
              }}
              animate={{ width: "95%" }}
              transition={{ duration: 2 }}
            ></motion.div>
          </div>
        </div>

        {/* the second card */}

        <div className="progress-container ">
          <h1
            className="App text-xs  lg:text-3xl xl:text-5xl"
            style={{
              alignSelf: "center",
              color: "white",
              marginBottom: "10%",
            }}
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
            <h1 style={{ fontSize: "1vw" }}>Web development</h1>
            <h1 style={{ fontSize: "1vw" }}>95%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: "0.5vw",
                borderRadius: "0.25vw",
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
            <h1 style={{ fontSize: "1vw" }}>Mobile App development</h1>
            <h1 style={{ fontSize: "1vw" }}>95%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: "0.5vw",
                borderRadius: "0.25vw",
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
            <h1 style={{ fontSize: "1vw" }}>Figma</h1>
            <h1 style={{ fontSize: "1vw" }}>80%</h1>
          </div>
          <div className="progress-div">
            <motion.div
              style={{
                backgroundColor: "#54c2cc",
                height: "0.5vw",
                borderRadius: "0.25vw",
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

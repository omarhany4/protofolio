import React from "react";
import Navbar from "../../GlobalComponents/navbar";
import { motion } from "framer-motion";
import "../../App.css";
import { Typewriter } from "react-simple-typewriter";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { SiUpwork } from "react-icons/si";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Home() {
  /* for the overlay component for whatsapp icon */
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/contactme`;
    navigate(path);
  };

  return (
    <div
      style={{ backgroundColor: "#11242f" }}
      className="h-screen content-center "
    >
      <div className="App content-center ">
        <div className=" flex justify-around  lg:justify-between items-center text-center  flex-col lg:flex-row mx-12 lg:mx-36  ">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
            className=" order-2 lg:order-1  max-w-screen-xl items-center lg:items-start content-center "
          >
            <motion.h1
              className="box text-xl lg:text-7xl"
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Hello! I am Omar Elish
            </motion.h1>
            <motion.h2
              className="box text-xl lg:text-4xl"
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
              style={{ marginTop: "2vh", color: "#dfe667" }}
            >
              Front End
              <Typewriter
                words={[" React Developer", " React Native Developer"]}
                loop={0}
                cursor
              />
            </motion.h2>
            <motion.p
              className="box text-md lg:text-3xl"
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
              style={{
                marginTop: "2vh",
                flexWrap: "wrap",
              }}
            >
              I am dedicated React/React native developer with experience in
              Firebase, Redux, TailwindCSS, Nextjs and API integration. I also
              have the basic knowledge Figma, GIT and TypeScript . Besides, I
              have many soft skills like communication and teamwork, and I am
              currently open for new opportunities.
            </motion.p>

            <motion.button
              onClick={routeChange}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              type="button"
              className="btn btn-primary "
              style={{
                alignSelf: "center",
                width: "30vh",
                marginTop: "2vw",
                backgroundColor: "#54c2cc",
                color: "white",
              }}
            >
              Get Connected
            </motion.button>
            <div
              className=" items-center w-full"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href="https://www.facebook.com/omarhany4">
                <BsFacebook size={"3Vh"} color="#54c2cc" />
              </a>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">+201147511105</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <svg
                    style={{
                      color: "#54c2cc",
                      margin: "3Vh",
                      height: "3vh",
                      width: "3vh",
                    }}
                    ref={ref}
                    {...triggerHandler}
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                )}
              </OverlayTrigger>

              <a href="https://www.instagram.com/omarhany4/">
                <BsInstagram size={"3Vh"} color="#54c2cc" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01711ce110639cbb41"
                style={{ margin: "3vh" }}
              >
                <SiUpwork size={"3Vh"} color="#54c2cc" />
              </a>
              <a href="https://www.linkedin.com/in/omar-elish-010850a2/">
                <AiFillLinkedin size={"3Vh"} color="#54c2cc" />
              </a>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0.2, x: "-100%" }}
            animate={{ opacity: 1, x: 0, rotate: [0, 0, 0, 0, 0] }}
            transition={{ duration: 2 }}
            src={require("../../GlobalComponents/pp.jfif")}
            className="flex lg:order-2 mt-12 mb-4  h-44 w-36 lg:my-0 lg:h-96 lg:w-64 rounded-full lg:rounded-3xl "
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../App.css";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "transparent" }} className="App">
      <nav className="navbar navbar-expand-lg " style={{ fontSize: "130%" }}>
        <div className="container-fluid">
          <div style={{ marginRight: "55%", marginLeft: "5%" }}>
            <div className="App-logo">
              <a
                className="navbar-brand"
                href="/"
                style={{ color: "#dfe667", fontSize: 30 }}
              >
                Omar Elish
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ marginRight: "15%" }}>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={"/skills"}
                  style={{ color: "#dfe667" }}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/latestprojects"
                  style={{ color: "#dfe667", width: 200, marginRight: "15%" }}
                >
                  Latest Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/contactme"
                  style={{ color: "#dfe667", width: 200, marginRight: "15%" }}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

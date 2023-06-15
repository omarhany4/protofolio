import Card from "react-bootstrap/Card";
import { useState } from "react";
import Gallery from "../Skills/Gallery";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DisplaySettings } from "@mui/icons-material";
import { AiOutlineClose } from "react-icons/ai";

const style = {
  display: "flex",
  flexDirection: " column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "transparent",
  borderWidth: 0,
  p: 4,
};

export default function Elmenus() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        sx={{ backgroundColor: "rgba(0,0,0,0.9)" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            style={{
              width: "10%",
              alignSelf: "end",
            }}
          >
            <AiOutlineClose onClick={handleClose} size={30} color="#dfe667" />
          </Button>
          <Gallery />
        </Box>
      </Modal>
    );
  }

  return (
    <Card
      style={{
        width: "30rem",
        fontWeight: "lighter",
      }}
      className="App"
    >
      <Card.Img
        variant="top"
        src={require("../../GlobalComponents/Frame.png")}
      />
      <Card.Body>
        <Card.Title>
          Food Delivery Mobile App for Both Android and IOS
        </Card.Title>
        <Card.Text>
          This App was created using React Native with many complicated
          libraries
          <ul>
            <li>
              Redux was used to handle the Cart items and calculate the check
              out amount
            </li>
            <li>
              Navigation was prepared for the perfect UI experience featuring
              modals , stack Navigations nested inside bottom bar Navigation
            </li>
            <li>
              Flatlist was used for more smooth experience with lighter load and
              more effieciency
            </li>
            <li>
              Many APIs were integrated in this app like Google sign-in ,
              firebase , and much more
            </li>
          </ul>
        </Card.Text>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="primary"
            style={{ backgroundColor: "#F97700", justifySelf: "center" }}
            onClick={handleOpen}
          >
            Take a look
          </Button>
        </div>
        <MyVerticallyCenteredModal open={open} onClose={handleClose} />
      </Card.Body>
    </Card>
  );
}

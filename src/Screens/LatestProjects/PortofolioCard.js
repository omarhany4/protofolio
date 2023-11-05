import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
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
  top: "50vh",
  left: "50vw",
  transform: "translate(-50%, -50%)",
  width: "25vw",
  bgcolor: "transparent",
  borderWidth: "1vw",
  p: "1vw",
};

export default function Elmenus() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

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
              width: "5vw",
              alignSelf: "end",
            }}
          >
            <AiOutlineClose
              onClick={handleClose}
              size={"1vw"}
              color="#dfe667"
            />
          </Button>
          <Gallery />
        </Box>
      </Modal>
    );
  }

  return (
    <Card
      style={{
        fontWeight: "lighter",
      }}
      className="App"
    >
      <Card.Img
        variant="top"
        style={{ height: "29vh" }}
        src={require("../../GlobalComponents/pp2.jpeg")}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "1vw" }}>
          This portofolio is created by React Js
        </Card.Title>
        <Card.Text style={{ fontSize: "0.6vw" }}>
          This App was created using React js with many complicated libraries
          <ul>
            <li>
              many Animations was built inside other animations by framer motion
            </li>
            <li>
              Navigation was prepared for the perfect UI experience featuring
              modals , top bar and links.
            </li>
            <li>
              Form for contact us page with handling submit and saving submitted
              data via "formspree.com"
            </li>
            <li>
              Portolio can be accessed via link
              "https://protofolio-zeta.vercel.app/"
            </li>
            <li>
              Social media links can be accessed through icons in the homepage
            </li>
          </ul>
        </Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="primary"
            style={{
              backgroundColor: "#F97700",
              justifySelf: "center",
              fontSize: "0.6vw",
            }}
            onClick={routeChange}
          >
            Take a look
          </Button>
        </div>
        <MyVerticallyCenteredModal open={open} onClose={handleClose} />
      </Card.Body>
    </Card>
  );
}

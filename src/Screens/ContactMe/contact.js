import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../../GlobalComponents/navbar";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#54c2cc",
    },
    secondary: {
      main: "#54c2cc",
    },
    text: {
      primary: "#54c2cc",
      secondary: "#54c2cc",
    },
  },
});

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div style={{ backgroundColor: "#11242f", height: "100vh" }}>
      <Navbar />
      <ThemeProvider theme={Theme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              <h1
                className="App"
                style={{ marginTop: "5%", color: "white", fontSize: "400%" }}
              >
                Contact <span style={{ color: "#54c2cc" }}>Me!</span>
              </h1>
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{
                      border: "solid #54c2cc 2px ",
                      borderRadius: 2,
                    }}
                    autoComplete="given-name"
                    name="fullName"
                    required
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{
                      border: "solid #54c2cc 2px ",
                      borderRadius: 2,
                    }}
                    required
                    fullWidth
                    id="lastName"
                    label="Subject"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ border: "solid #54c2cc 2px ", borderRadius: 2 }}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    sx={{ border: "solid #54c2cc 2px ", borderRadius: 2 }}
                    id="filled-number"
                    label="Phone Number"
                    type="phone number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    sx={{
                      border: "solid #54c2cc 2px ",
                      borderRadius: 2,
                    }}
                    multiline
                    id="standard-multiline-flexible"
                    label="Message"
                    variant="filled"
                    rows={6}
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

import { Box, Button, styled, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import React, {useState} from "react";
import reactImg from "../media/react_svg.svg";

const Hero = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    backgroundColor: "#00C7FF",
    color: "white",
    width: "20%",
    borderRadius: "25px",
    "&:hover": {
      border: "3px solid white",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  }));

  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  }));

  return (
    <Box
      sx={{
        mt: 8,
        mb: 12,
        p: 2,
        maxWidth: "1200px",
        mx: "auto",
      }}
      id="home"
    >
      <Typography
        sx={{ color: "white", textAlign: "center", mb: 2 }}
        variant="h6"
      >
        Hello, I'm Aryan Hussain
      </Typography>
      <CustomTitle variant="h1">
        I enjoy <span style={{ color: "rgba(0,199,255,255)" }}>building</span>{" "}
        and <span style={{ color: "rgba(0,199,255,255)" }}>designing</span> for
        the web.
      </CustomTitle>

      <Typography
        sx={{ color: "white", textAlign: "center", mb: 2, mt:3 ,fontFamily:"none" }}
        variant="h6"
      >
        I 'm a Motivated software engineer looking to pursue a successful career in
        software development, where I can help in the delivery of
        state-of-the-art software solutions. Experience includes coding,
        troubleshooting, and testing. Relevant skills include JavaScript, C++,
        Data Structures and Debugging
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 150,
            width: 150,
            mt: 4,
            mb: 4,
          }}
          src={reactImg}
        />

        <CustomButton
        onClick={handleClickOpen}>Contact Me</CustomButton>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Phone Number: 7888415331
            <br />
            Email: aryanhussain78668@gmail.com
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Hero;

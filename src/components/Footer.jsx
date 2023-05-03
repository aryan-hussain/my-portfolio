import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import  TwitterIcon  from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        borderTop: "1px solid #7B89A8",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          PAGES
        </Typography>

        <Link
          to="home"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Home
        </Link>
        <Link
          to="experience"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Experience
        </Link>
        
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          SOCIAL
        </Typography>

        <a 
         href="https://github.com/aryan-hussain"
         target="_blank"
         rel="noopener noreferrer"
        >
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <GitHubIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            GitHub
          </Typography>
        </Box>
        </a>

        <a 
         href="https://twitter.com/Hussain78668?t=rkNPTt8umRVnB3mo7a1QTA&s=09"
         target="_blank"
         rel="noopener noreferrer"
        >
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <TwitterIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            Twitter
          </Typography>
        </Box>
        </a>

        <a 
         href="https://www.linkedin.com/in/aryanhussain08/"
         target="_blank"
         rel="noopener noreferrer"
        >
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <LinkedInIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            LinkedIn
          </Typography>
        </Box>
        </a>

      </Box>
    </Box>
  );
};

export default Footer;

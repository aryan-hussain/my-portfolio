import { Box, Typography } from "@mui/material";
import React from "react";
import Examroom from "../media/download.jpeg";
import think from "../media/think.png";

const Experience = () => {
  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto", my: 12 }} id="experience">
      <Typography
        variant="h4"
        sx={{ color: "white", textAlign: "center", mb: 2 }}
      >
        Let's take a look at my{" "}
        <span style={{ color: "rgba(0,199,255,255)" }}>Experience</span>
      </Typography>

      <div style={{
        display:"grid",
        justifyContent:"center",
        // flexDirection:"column",
        alignItems:"center",
        gap:"20px"
      }}>



        <div style={{
          display:"flex",
          flexWrap:"wrap",
          gap:"10px"
        }}>
          <div>
            <img src={Examroom} alt="" />
          </div>
          <div>
            <div>
              <h2 style={{ color: "whitesmoke" }}>Full Stack Engineer</h2>
            </div>
            <div>
              <h4 style={{ color: "whitesmoke" }}>ExamRoom.AI · Internship</h4>
              <p style={{ color: "whitesmoke" }}>
                Apr 2022 - Oct 2022 · 7 month <br />
                Bengaluru, Karnataka, India
              </p>
            </div>
            
              <h3 style={{ color: "whitesmoke" }}>
                <span style={{ color: "rgba(0,199,255,255)" }}>Skills</span>:
                Node.js · Angular · TypeScript · HTML5 · Cascading Style Sheets
                (CSS) · JavaScript
              </h3>
            
          </div>
        </div>

        <div style={{
          display:"flex",
          flexWrap:"wrap",
          gap:"10px",
          // width:"1007px"
        }}>
          <div>
            <img src={think} alt="" />
          </div>
          <div>
            <div>
              <h2 style={{ color: "whitesmoke" }}>Python Developer</h2>
            </div>
            <div>
              <h4 style={{ color: "whitesmoke" }}>ThinkNext · Internship</h4>
              <p style={{ color: "whitesmoke" }}>
                Jul 2021 - Feb 2022 · 8 mos <br />
                Mohali, Punjab, India
              </p>
            </div>
          
              <h3 style={{ color: "whitesmoke" }}>
                {" "}
                <span style={{ color: "rgba(0,199,255,255)" }}>Skills</span>:
                HTML5 · Cascading Style Sheets (CSS) · JavaScript · Bootstrap · <br />
                Python (Programming Language)
              </h3>
            
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Experience;

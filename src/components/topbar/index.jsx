import React, { useState } from "react";
import { useTheme } from "../../ThemeProvider";
import { Box, Typography } from "@mui/material";

import modlogo from "../../assets/images/mod-logo.png";

const Topbar = () => {
  const { toggleTheme } = useTheme();
  const [mode, setMode] = useState("dark");

  const theme = useTheme();
  const { palette } = theme.theme;

  const handleChangeTheme = (newTheme) => {
    toggleTheme(newTheme);
    setMode(newTheme);
  };

  return (
    <header style={{ margin: "0px !important" }}>
      <div
        style={{
          paddingTop: "5px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <a href="index.aspx" className="logo">
            <img
              src={modlogo}
              alt=""
              style={{ height: "76px", width: "120px", marginLeft: "15px" }}
            />
          </a>
        </div>
        <div>
          <div>
            <h2
              id="Heading1"
              style={{
                color: "black",
                marginTop: "10px",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              <b>Nevigation Management Pvt. Ltd. </b>
            </h2>
            <div>
              <h4 style={{ color: "maroon", margin: "2px" }}>
                <b>Visitor Management System Powered By ABCDE</b>
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src={modlogo}
              alt=""
              style={{ height: "76px", width: "120px", float: "right" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          height: "20px",
          backgroundColor: palette.primary.main,
          color: palette.text.main,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography pl={1}></Typography>
        <Box style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ marginRight: "5px" }}>
            <label htmlFor="light">
              <div
                style={{
                  backgroundColor: "grey",
                  border:
                    mode === "light" ? "3px solid black" : "1px solid black",
                  borderRadius: "50%",
                  width: "15px",
                  height: "15px",
                  display: "inline-block",
                }}
                onClick={() => handleChangeTheme("light")}
              ></div>
            </label>
          </div>
          <div style={{ marginRight: "5px" }}>
            <label htmlFor="dark">
              <div
                style={{
                  backgroundColor: "blue",
                  border:
                    mode === "dark" ? "3px solid black" : "1px solid black",
                  borderRadius: "50%",
                  width: "15px",
                  height: "15px",
                  display: "inline-block",
                }}
                onClick={() => handleChangeTheme("dark")}
              ></div>
            </label>
          </div>
          <div style={{ marginRight: "5px" }}>
            <label htmlFor="default">
              <div
                style={{
                  backgroundColor: "green",
                  border:
                    mode === "default" ? "3px solid black" : "1px solid black",
                  borderRadius: "50%",
                  width: "15px",
                  height: "15px",
                  display: "inline-block",
                }}
                onClick={() => handleChangeTheme("default")}
              ></div>
            </label>
          </div>
          <div style={{ marginRight: "5px" }}>
            <label htmlFor="custom">
              <div
                style={{
                  backgroundColor: "yellow",
                  border:
                    mode === "custom" ? "3px solid black" : "1px solid black",
                  borderRadius: "50%",
                  width: "15px",
                  height: "15px",
                  display: "inline-block",
                }}
                onClick={() => handleChangeTheme("custom")}
              ></div>
            </label>
          </div>
        </Box>
      </div>
    </header>
  );
};

export default Topbar;

import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeProvider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Item = ({ title, to, icon, selected, setSelected, access }) => {
  const theme = useTheme();
  const { palette } = theme.theme;
  const isActive = selected === title;

  if (!access) {
    return null;
  }

  return (
    <Link to={to} onClick={() => setSelected(title)}>
      <MenuItem
        active={isActive}
        style={{
          color: isActive ? palette.text.main : palette.text.primary,
          backgroundColor: isActive ? palette.background.main : "transparent",
        }}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const { palette } = theme.theme;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const role = "admin";

  return (
    <Box sx={{ position: "relative", overflow: "visible" }}>
      <Box
        sx={{
          position: "absolute",
          top: 25,
          right: -15,
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <IconButton
          sx={{
            width: "25px",
            height: "25px",
            borderRadius: "40%",
            color: palette.text.main,
            backgroundColor: palette.secondary.main,
            "&:hover": {
              backgroundColor: palette.background.main,
            },
          }}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ArrowForwardIcon sx={{ fontSize: "15px" }} />
          ) : (
            <ArrowBackIcon sx={{ fontSize: "15px" }} />
          )}
        </IconButton>
      </Box>
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor={"#f4f4f4"}
        rootStyles={{
          height: "100vh",
          width: "165px",
          paddingTop: "1px",
          minWidth: "165px",
          display: "flex",
        }}
      >
        <Menu iconShape="square">
          <Box>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              access={role === "admin" || role === "receptionist"}
            />
            <Item
              title="Visitors"
              to="/visitors"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              access={role === "admin" || role === "receptionist"}
            />
            <Item
              title="Passes"
              to="/passes"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              access={role === "admin" || role === "receptionist"}
            />
            <Item
              title="Users"
              to="/users"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              access={role === "admin"}
            />
            <Item
              title="Reports"
              to="/reports"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              access={role === "admin" || role === "receptionist"}
            />
            <Item
              title="Profile"
              to="/profile"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              access={role === "admin" || role === "receptionist"}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              access={role === "admin" || role === "receptionist"}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;

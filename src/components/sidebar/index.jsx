import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, Link } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";


const Item = ({
    title,
    to,
    icon,
    selected,
    setSelected,
}) => {
    return (
        <Link href={to} passHref style={{ textDecoration: "none" }}>
            <MenuItem
                active={selected === title}

                style={{
                    backgroundColor: "white",
                    color: "black",
                    paddingLeft: "15px",
                }}
                onClick={() => setSelected(title)}
                icon={icon}
            >
                <Typography>{title}</Typography>
            </MenuItem>
        </Link>
    );
};

const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    let role = "admin";
    let user_name = "ddd";
    let user_type = "admin";
    let user_pic = "dddd";

    const handleToggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleMouseEnter = () => {
        setIsCollapsed(false);
    };

    const handleMouseLeave = () => {
        setIsCollapsed(true);
    };

    return (
        <Sidebar
            collapsed={isCollapsed}
            backgroundColor={"white"}
            rootStyles={{
                height: "100vh",
                width: "200px",
                minWidth: "200px",
                display:"flex"
            }}
        >

            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    width: isCollapsed ? '70px' : '200px',
                    transition: 'width 0.6s ease',
                }}
            >
                <Menu
                    open={!isCollapsed}
                    onClose={handleMouseLeave}
                >
                    {/* <Menu>
                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                            style={{
                                margin: "10px 0 20px 0",
                                color: "black",
                                backgroundColor: "white",
                            }}
                        >
                            {!isCollapsed && (
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    ml="5px"
                                >
                                    <Box display="flex" justifyContent="center" alignItems="center" mt="8px">
                                        <img
                                            alt="ESSI"
                                            width="100px"
                                            height="35px"
                                            src={"../../assets/elkosta_logo.png"}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </Box>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>

                        {!isCollapsed && (
                            <Box mb="25px">
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <img
                                        alt="User-Profile"
                                        width="100px"
                                        height="100px"
                                        src={
                                            user_pic
                                                ? `data:image/png;base64,${user_pic}`
                                                : "../../assets/user.png"
                                        }
                                        style={{ cursor: "pointer", borderRadius: "50%" }}
                                    />
                                </Box>
                                <Box textAlign="center">
                                    <Typography
                                        variant="h3"
                                        color={"black"}
                                        fontWeight="bold"
                                        sx={{ m: "10px 0 0 0" }}
                                    >
                                        {user_name}
                                    </Typography>
                                    <Typography variant="h5" color={"maroon"}>
                                        {user_type}
                                    </Typography>
                                </Box>
                            </Box>
                        )} */}

                    <Box>
                        <SubMenu
                            label="Dashboard"
                            icon={<HomeOutlinedIcon />}
                            color={"black"}
                            style={{
                                backgroundColor: "white",
                                paddingLeft: "15px",
                                display:
                                    role === "admin" || role === "receptionist" ? "" : "none",
                            }}
                        >
                            <Item
                                title="Dashboard"
                                to="/"
                                icon={<HomeOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </SubMenu>

                        <SubMenu
                            label="Dashboard"
                            icon={<HomeOutlinedIcon />}
                            color={"black"}
                            style={{
                                backgroundColor: "white",
                                paddingLeft: "15px",
                                display: role === "guard" ? "" : "none",
                            }}
                        >
                            <Item
                                title="Home"
                                to="/guard"
                                icon={<HomeOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </SubMenu>

                        <SubMenu
                            label="Visitors"
                            icon={<PeopleOutlinedIcon />}
                            color={"black"}
                            style={{
                                backgroundColor: "white",
                                paddingLeft: "15px",
                                display:
                                    role === "admin" || role === "receptionist" ? "" : "none",
                            }}
                        >
                            <Item
                                title="Visitors"
                                to="/visitors"
                                icon={<PeopleOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Passes"
                                to="/passes/viewandcancelpass"
                                icon={<ListOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </SubMenu>

                        <SubMenu
                            label="Appointments"
                            icon={<CalendarTodayOutlinedIcon />}
                            color={"black"}
                            style={{
                                backgroundColor: "white",
                                paddingLeft: "15px",
                                display:
                                    role === "admin" || role === "receptionist" ? "" : "none",
                            }}
                        >
                            <Item
                                title="appointments"
                                to="/appointment/appointments"
                                icon={<PersonOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="create appointment"
                                to="/appointment/createappointment"
                                icon={<CalendarTodayOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </SubMenu>

                        <SubMenu
                            label="Employee"
                            icon={<BadgeOutlinedIcon />}
                            color={"black"}
                            style={{
                                backgroundColor: "white",
                                paddingLeft: "15px",
                                display: role === "admin" ? "" : "none",
                            }}
                        >
                            <Item
                                title="Employees"
                                to="/employee/employees"
                                icon={<BadgeOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Add New Employee"
                                to="/employee/addnewemployee"
                                icon={<PersonAddAltOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </SubMenu>

                        <SubMenu
                            label="Reports"
                            icon={<DescriptionOutlinedIcon />}
                            color={"black"}
                            style={{
                                backgroundColor: "white",
                                paddingLeft: "15px",
                                display: role === "admin" ? "" : "none",
                            }}
                        >
                            <Item
                                title="Download Reports"
                                to="/reports/downloadreports"
                                icon={<DownloadOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </SubMenu>

                        <SubMenu
                            label="Authentication"
                            icon={<SettingsOutlinedIcon />}
                            color={"black"}
                            style={{
                                backgroundColor: "white",
                                paddingLeft: "15px",
                                display:
                                    role === "admin" || role === "receptionist" || role === "guard"
                                        ? ""
                                        : "none",
                            }}
                        >
                            <Item
                                title="Change Password"
                                to="/auth/changepassword"
                                icon={<SettingsOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Help"
                                to="/auth/help"
                                icon={<SettingsOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </SubMenu>
                    </Box>
                </Menu>
            </div>
        </Sidebar>
    );
};

export default SideBar;

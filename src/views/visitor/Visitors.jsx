import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Header from "../../components/header";
import visitorData from "../../utils/data/visitorData";
import { useTheme } from "../../ThemeProvider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "../../components/alert";

const Visitors = () => {
  const theme = useTheme();
  const { palette } = theme.theme;
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedVisitor, setSelectedVisitor] = useState(null);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleClick = (event, visitor) => {
    setAnchorEl(event.currentTarget);
    setSelectedVisitor(visitor);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // setSelectedVisitor(null);
  };

  const handleAddNewVisitor = () => {
    navigate("/visitors/addnewvisitor");
  };

  const handleView = (visitor) => {
    console.log("Update action clicked");
    console.log(visitor);
    navigate(`/visitors/visitorprofile`, { state: { visitorData: visitor } });
    handleClose();
  };

  const handleUpdate = (visitor) => {
    console.log("Update action clicked");
    console.log(visitor);
    navigate(`/visitors/updatevisitor`, { state: { visitor: visitor } });
    handleClose();
  };

  const handleDelete = (visitor) => {
    setSelectedVisitor(visitor);
    setShowDeleteAlert(true);
    handleClose();
  };

  const confirmDelete = () => {
    console.log("Deleting...");
    console.log(selectedVisitor);
    setShowDeleteAlert(false);
    // Perform delete action
  };

  return (
    <Box
      minHeight="100vh"
      width="100%"
      overflow="auto"
      sx={{ scrollbarWidth: "thin" }}
    >
      <Box m={2}>
        <Header
          title="VISITORS"
          breadcrumbs={[{ text: "Visitors", link: "/visitors" }]}
        />
        <Box p={2}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box flex="0.4" display={"flex"} alignItems="center">
              <TextField
                fullWidth
                placeholder="Search Visitors..."
                InputProps={{ sx: { height: "2.3rem !important" } }}
                sx={{ width: "38rem" }}
              />
              <Button
                variant="contained"
                sx={{
                  marginLeft: "10px",
                  backgroundColor: palette.primary.main,
                  color: palette.text.main,
                  "&:hover": { backgroundColor: palette.secondary.main },
                  height: "100%",
                }}
              >
                Search
              </Button>
            </Box>
            <Box ml={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: palette.primary.main,
                  color: palette.text.main,
                  "&:hover": { backgroundColor: palette.secondary.main },
                  height: "100%",
                }}
                onClick={() => handleAddNewVisitor()}
              >
                ADD VISITOR
              </Button>
            </Box>
          </Box>

          <TableContainer
            component={Paper}
            sx={{
              mt: 2,
              borderWidth: "1px",
              borderRadius: "5px",
              borderStyle: "solid",
              borderColor: "#01012E22",
            }}
          >
            <Table>
              <TableHead sx={{ backgroundColor: palette.background.header }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Full name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Phone Number</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Residence</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {visitorData.map((visitor, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {visitor.firstName} {visitor.lastName}
                    </TableCell>
                    <TableCell>{visitor.email}</TableCell>
                    <TableCell>{visitor.phoneNumber}</TableCell>
                    <TableCell>{visitor.address}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="more"
                        aria-controls="actions-menu"
                        aria-haspopup="true"
                        onClick={(event) => handleClick(event, visitor)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="actions-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={() => handleView(selectedVisitor)}>
                          <ListItemIcon>
                            <VisibilityIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="View" />
                        </MenuItem>
                        <MenuItem onClick={() => handleUpdate(selectedVisitor)}>
                          <ListItemIcon>
                            <EditIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="Update" />
                        </MenuItem>
                        <MenuItem onClick={() => handleDelete(selectedVisitor)}>
                          <ListItemIcon>
                            <DeleteIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="Delete" />
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Alert
            open={showDeleteAlert}
            onClose={() => setShowDeleteAlert(false)}
            title="Confirm Delete"
            message="Are you sure you want to delete this visitor?"
            buttonText="Delete"
            buttonColor="red"
            onButtonClick={confirmDelete}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Visitors;

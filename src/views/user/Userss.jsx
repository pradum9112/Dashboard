import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";
import Header from "../../components/header";
import userData from "./userData";
import { useTheme } from "../../ThemeProvider";

const Users = () => {
  const theme = useTheme();
  const { palette } = theme.theme;
  return (
    <Box
      minHeight="100vh"
      width="100%"
      overflow="auto"
      sx={{ scrollbarWidth: "thin" }}
    >
      <Box m={2}>
        <Header
          title="USERS"
          breadcrumbs={[{ text: "Users", link: "/users" }]}
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
                placeholder="Search Users..."
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
              >
                ADD USER
              </Button>
            </Box>
          </Box>

          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Image</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Full Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>User Type</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Phone Number</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Address</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Blood Group</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Employee Code</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Work Location</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Avatar
                        alt={`${user.firstName} ${user.lastName}`}
                        src={user.image}
                      />
                    </TableCell>
                    <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                    <TableCell>{user.user_type}</TableCell>
                    <TableCell>{user.phoneNumber}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>{user.bloodGroup}</TableCell>
                    <TableCell>{user.employeeCode}</TableCell>
                    <TableCell>{user.workLocation}</TableCell>
                    <TableCell>{user.department}</TableCell>
                    <TableCell>{user.action}</TableCell>{" "}
                    {/* You need to provide the action property in your user data */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Users;

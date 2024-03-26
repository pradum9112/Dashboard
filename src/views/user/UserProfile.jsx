import { useLocation } from "react-router-dom";
import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import Header from "../../components/header";
import { useTheme } from "../../ThemeProvider";
import defaultImage from "../../assets/images/noimage.jpg";

const UserProfile = () => {
  const theme = useTheme();
  const { palette } = theme.theme;
  const location = useLocation();
  const { userData } = location.state;

  return (
    <Box m="20px" style={{ width: "100%" }}>
      <Header
        title="USER DETAIL"
        breadcrumbs={[
          { text: "users", link: "/users" },
          {
            text: `user: ${userData.firstName}`,
            link: "/users/userprofile",
          },
        ]}
      />
      <Box
        sx={{
          flexGrow: 1,
          padding: "15px",
          backgroundColor: "white",
          borderWidth: "2px",
          borderRadius: "5px",
          borderStyle: "solid",
          borderColor: palette.secondary.main,
          boxShadow:
            "inset 0 1px 1px rgba(0,0,0,0.075), inset 0 0 8px rgba(0,0,0,0.1)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "center",
                border: 1,
                borderColor: "grey.500",
                borderRadius: 1,
                padding: 1,
                width: "100%",
                maxWidth: 250,
                height: 250,
                maxHeight: 250,
              }}
            >
              <img
                alt={`${userData.firstName} ${userData.lastName}`}
                src={defaultImage}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: "block",
                  margin: "auto",
                }}
              />
            </Box>
            {/* Signature Box */}
            <Box
              sx={{
                textAlign: "center",
                border: 1,
                borderColor: "grey.500",
                borderRadius: 1,
                marginTop: 2,
                padding: 1,
                width: "100%",
                maxWidth: 250,
                height: 80,
                maxHeight: 80,
              }}
            >
              <img
                alt={`${userData.firstName} ${userData.lastName}`}
                src={userData.signature}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: "block",
                  margin: "auto",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" mt={2} textAlign="center">
              {`${userData.firstName} ${userData.lastName}`}
            </Typography>
            <Typography variant="subtitle1" textAlign="center">
              {userData.user_type}
            </Typography>
            <Typography variant="body1" textAlign="center">
              {userData.address}
            </Typography>
            <Typography variant="body1" textAlign="center">
              Phone: {userData.phoneNumber}
            </Typography>
            <Typography variant="body1" textAlign="center">
              Email: {userData.email}
            </Typography>
            <Typography variant="body1" textAlign="center">
              Gov ID Type: {userData.gov_id_type}
            </Typography>
            <Typography variant="body1" textAlign="center">
              Gov ID No: {userData.gov_id_no}
            </Typography>
            <Typography variant="body1" textAlign="center">
              Blood Group: {userData.bloodGroup}
            </Typography>
            <Typography variant="body1" textAlign="center">
              Blacklisted: {userData.blacklisted ? "Yes" : "No"}
            </Typography>
            <Typography variant="body1" textAlign="center">
              Pass Created: {userData.isPassCreated ? "Yes" : "No"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserProfile;

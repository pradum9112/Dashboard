import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Avatar, Paper } from '@mui/material';
import userData from "../user/userData";

const UserProfile = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const foundUser = userData.find((user) => user.id === parseInt(id));
    setUser(foundUser);
  }, [id]);

  return (
    <Box
      m={1}
      marginTop={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
      position={"relative"}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 400,
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {user && (
          <>
            <Avatar
              src={`https://loremflickr.com/320/320/${user.lastName.toLowerCase()}`}
              alt={`${user.firstName} ${user.lastName}`}
              sx={{ width: 180, height: 140, borderRadius: 0 }}
            />
            <Box
              sx={{
                width: 180,
                height: 35,
                border: '1px solid rgba(0, 0, 0, 0.23)',
                borderRadius: 1,
                textAlign: 'center',
                overflow: 'hidden',
              }}
            >
              <Typography variant="body2" >
                Signature
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="div" >
              <strong>Name:</strong>  <strong> {`${user.firstName} ${user.lastName}`}</strong>
              </Typography>
              <Typography variant="h5" >
                <strong>User Type:</strong> {user.user_type}
              </Typography>
              <Typography variant="h5" >
                <strong>Phone Number:</strong> {user.phoneNumber}
              </Typography>
              <Typography variant="h5" >
                <strong>Address:</strong> {user.address}
              </Typography>
              <Typography variant="h5" >
                <strong>Blood Group:</strong> {user.bloodGroup}
              </Typography>
              <Typography variant="h5" >
                <strong>Employee Code:</strong> {user.employeeCode}
              </Typography>
              <Typography variant="h5" >
                <strong>Work Location:</strong> {user.workLocation}
              </Typography>
              <Typography variant="h5" >
                <strong>Department:</strong> {user.department}
              </Typography>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default UserProfile;

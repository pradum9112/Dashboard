import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Alert,
} from "@mui/material";
import { useTheme } from "../../ThemeProvider";

const Login = () => {
  const theme = useTheme();
  const { palette } = theme.theme;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    const message = `Username: ${username}, Password: ${password}`;
    setUsername("");
    setPassword("");
    setShowAlert(true);
  };

  return (
    <Container maxWidth="sm">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Paper
          style={{
            width: "28rem",
            padding: "20px",
            borderRadius: "6px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#01012E22",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {showAlert && (
            <Alert
              severity="success"
              onClose={() => setShowAlert(false)}
              style={{ marginBottom: "16px" }}
            >
              Login Successful!
            </Alert>
          )}
          <Typography
            variant="h4"
            align="center"
            mb={2}
            style={{ color: palette.primary.main }}
            gutterBottom
            fontWeight={600}
          >
            Login
          </Typography>
          <form>
            <TextField
              id="username"
              fullWidth
              placeholder="User Name"
              InputProps={{
                sx: {
                  height: "2.1rem !important",
                  boxShadow:
                    "inset 0 1px 1px rgba(0,0,0,0.075), inset 0 0 8px rgba(0,0,0,0.1)",
                },
              }}
              style={{ marginBottom: "16px" }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="password"
              type="password"
              variant="outlined"
              fullWidth
              placeholder="Password"
              InputProps={{
                sx: {
                  height: "2.1rem !important",
                  boxShadow:
                    "inset 0 1px 1px rgba(0,0,0,0.075), inset 0 0 8px rgba(0,0,0,0.1)",
                },
              }}
              style={{ marginBottom: "16px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleSubmit}
              style={{
                backgroundColor: palette.primary.main,
                color: palette.text.main,
                marginBottom: "16px",
              }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </div>
    </Container>
  );
};

export default Login;

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Alert,
  IconButton,
} from "@mui/material";
import { useTheme } from "../../ThemeProvider";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ResetPassword = () => {
  const theme = useTheme();
  const { palette } = theme.theme;

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      const message = `New Password: ${newPassword}, Confirm Password: ${confirmPassword}`;
      setNewPassword("");
      setConfirmPassword("");
      setShowAlert(true);
      setPasswordMatchError(false);
    } else {
      setPasswordMatchError(true);
    }
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
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#01012E22",
            borderRadius: "6px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {showAlert && (
            <Alert
              severity="success"
              onClose={() => setShowAlert(false)}
              style={{ marginBottom: "16px" }}
            >
              Password Reset Successful!
            </Alert>
          )}
          <Typography
            variant="h5"
            align="center"
            mb={2}
            style={{ color: palette.primary.main }}
            gutterBottom
            fontWeight={600}
          >
            Reset Password
          </Typography>
          <form>
            <TextField
              id="new-password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              placeholder="New Password"
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
                sx: {
                  height: "2.1rem !important",
                  boxShadow:
                    "inset 0 1px 1px rgba(0,0,0,0.075), inset 0 0 8px rgba(0,0,0,0.1)",
                },
              }}
              style={{ marginBottom: "16px" }}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
              id="confirm-password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              placeholder="Confirm New Password"
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
                sx: {
                  height: "2.1rem !important",
                  boxShadow:
                    "inset 0 1px 1px rgba(0,0,0,0.075), inset 0 0 8px rgba(0,0,0,0.1)",
                },
              }}
              style={{ marginBottom: "16px" }}
              value={confirmPassword}
              error={passwordMatchError}
              onChange={(e) => setConfirmPassword(e.target.value)}
              helperText={passwordMatchError ? "Passwords do not match" : ""}
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
              Reset Password
            </Button>
          </form>
        </Paper>
      </div>
    </Container>
  );
};

export default ResetPassword;

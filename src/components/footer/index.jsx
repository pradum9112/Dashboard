import React, { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "../../ThemeProvider";

const Footer = () => {
  const theme = useTheme();
  const { palette } = theme.theme;

  return (
    <Box
      sx={{
        backgroundColor: palette.primary.main,
        color: palette.text.main,
        padding: "20px 70px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Typography variant="body1">
        Fax: +91-11-4100000898 | Email:{" "}
        <Link href="mailto:support@xyzindia.com" color="inherit">
          support@xyzindia.com
        </Link>{" "}
        | Address: 100- xxxxxxxxx House, New Delhi-111111
      </Typography>
    </Box>
  );
};

export default Footer;

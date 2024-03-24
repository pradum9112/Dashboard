import React, { useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Header from "../../components/header";
import { useTheme } from "../../ThemeProvider";

const Dashboard = () => {
  const theme = useTheme();
  const { palette } = theme.theme;

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        overflowY: "auto",
        scrollbarWidth: "thin",
      }}
    >
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header
            title="DASHBOARD"
            breadcrumbs={[{ text: "Dashboard", link: "/" }]}
          />
        </Box>
        <Box>
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            sx={{ gap: "20px", height: "9rem" }}
            p={2}
          >
            <Box
              bgcolor={palette.background.default}
              borderRadius={2}
              boxShadow={2}
              p={2}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                color={palette.text.primary}
              >
                7
              </Typography>
              <Typography color={palette.text.secondary}>
                Open Visit Logs
              </Typography>
            </Box>
            <Box
              bgcolor={palette.background.default}
              borderRadius={2}
              boxShadow={2}
              p={2}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                color={palette.text.primary}
              >
                7
              </Typography>
              <Typography color={palette.text.secondary}>
                Open Visit Logs
              </Typography>
            </Box>
            <Box
              bgcolor={palette.background.default}
              borderRadius={2}
              boxShadow={2}
              p={2}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                color={palette.text.primary}
              >
                7
              </Typography>
              <Typography color={palette.text.secondary}>
                Open Visit Logs
              </Typography>
            </Box>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            sx={{ gap: "20px" }}
            p={2}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: palette.primary.main,
                color: palette.text.main,
              }}
            >
              Log Visit
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: palette.primary.main,
                color: palette.text.main,
              }}
            >
              Log Key
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: palette.primary.main,
                color: palette.text.main,
              }}
            >
              Create Visitor
            </Button>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="1fr 2fr"
            sx={{ gap: "25px" }}
            p={2}
          >
            <Box
              bgcolor={palette.background.default}
              borderRadius={2}
              boxShadow={2}
              p={2}
            >
              <Typography variant="h5" color={palette.text.primary}>
                Visit Sessions
              </Typography>
              <p>circle</p>
            </Box>
            <Box>
              <Typography variant="h5" mb={1} color={palette.text.primary}>
                Today's Visitors
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead
                    sx={{ backgroundColor: palette.background.header }}
                  >
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Full Name</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Room</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>john@ex.com</TableCell>
                      <TableCell>4001</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>jane@ex.com</TableCell>
                      <TableCell>3021</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Bob Johnson</TableCell>
                      <TableCell>bob@ex.com</TableCell>
                      <TableCell>2041</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography
                variant="h5"
                mt={2}
                mb={1}
                color={palette.text.primary}
              >
                Today's Key Logs
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead
                    sx={{ backgroundColor: palette.background.header }}
                  >
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Full Name</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Room</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>john@ex.com</TableCell>
                      <TableCell>4001</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>jane@ex.com</TableCell>
                      <TableCell>3021</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Bob Johnson</TableCell>
                      <TableCell>bob@ex.com</TableCell>
                      <TableCell>2041</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

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
} from "@mui/material";
import Header from "../../components/header";
import visitorData from "./visitorData";
import { useTheme } from "../../ThemeProvider";

const Visitors = () => {
  const theme = useTheme();
  const { palette } = theme.theme;
  return (
    <Box
     
      minHeight="100vh"
      width="100%"
      overflow="auto"
      sx={{ scrollbarWidth: "thin" }}
    >
      <Box m={2}
       >
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
            <Box flex="0.4" display={"flex"} alignItems="center" >
              <TextField
                fullWidth
                // variant="outlined"
                placeholder="Search Items for your use..."
                InputProps={{ sx: { height: '2.3rem !important' } }}
                sx={{width:"38rem" }}
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
                ADD VISITOR
              </Button>
            </Box>
          </Box>

          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
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
                    <TableCell>{visitor.fullName}</TableCell>
                    <TableCell>{visitor.email}</TableCell>
                    <TableCell>{visitor.phoneNumber}</TableCell>
                    <TableCell>{visitor.residence}</TableCell>
                    <TableCell>{visitor.action}</TableCell>
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

export default Visitors;

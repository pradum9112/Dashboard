import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = ({ title, subtitle }) => (
  <Box mb="20px">
    {title && (
      <Typography variant="h5" fontWeight="bold" sx={{ mb: "5px" }}>
        {title}
      </Typography>
    )}
    {subtitle && (
      <Typography>
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default Header;

import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Header from './Header'; // Import the Header component

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <Header /> {/* Use the Header component */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

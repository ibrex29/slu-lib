import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main, boxShadow: 3 }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography 
          variant="h6" 
          noWrap 
          component="div" 
          sx={{ 
            fontWeight: 'bold', 
            marginRight: 2 // Reduced spacing
          }}
        >
          OPAC
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}> {/* Reduced gap between buttons */}
          <Button 
            color="inherit" 
            component={Link} 
            to="/" 
            sx={{ '&:hover': { backgroundColor: theme.palette.secondary.light } }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about" 
            sx={{ '&:hover': { backgroundColor: theme.palette.secondary.light } }}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/library" 
            sx={{ '&:hover': { backgroundColor: theme.palette.secondary.light } }}
          >
            My Library
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/discussions" 
            sx={{ '&:hover': { backgroundColor: theme.palette.secondary.light } }}
          >
            Discussions
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/message" 
            sx={{ '&:hover': { backgroundColor: theme.palette.secondary.light } }}
          >
            Message
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/new-arrivals" 
            sx={{ '&:hover': { backgroundColor: theme.palette.secondary.light } }}
          >
            New Arrivals
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/top-stories" 
            sx={{ '&:hover': { backgroundColor: theme.palette.secondary.light } }}
          >
            Top Stories
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/contact-us" 
            sx={{ '&:hover': { backgroundColor: theme.palette.secondary.light } }}
          >
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

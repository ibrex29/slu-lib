import React from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const SubMenu: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        marginY: 2,
        padding: 2,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
      }}
    >
      <Button color="inherit" component={Link} to="/books" sx={{ textTransform: 'none' }}>
        All material types
      </Button>
      <Button color="inherit" component={Link} to="/journals-serials" sx={{ textTransform: 'none' }}>
        Books
      </Button>
      <Button color="inherit" component={Link} to="/articles-book-chapters" sx={{ textTransform: 'none' }}>
        Journals and Serials
      </Button>
      <Button color="inherit" component={Link} to="/browse-a-z" sx={{ textTransform: 'none' }}>
        Articles and Book Chapters
      </Button>
      <Button color="inherit" component={Link} to="/experts" sx={{ textTransform: 'none' }}>
        Browse A-Z
      </Button>
      <Button color="inherit" component={Link} to="/discussions" sx={{ textTransform: 'none' }}>
        Experts
      </Button>
      <Button color="inherit" component={Link} to="/discussions" sx={{ textTransform: 'none' }}>
        Discussions
      </Button>
    </Box>
  );
};

export default SubMenu;

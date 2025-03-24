import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Disease Detection', path: '/detect' },
    { text: 'About', path: '/about' }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#4caf50' }}>
        Agrivision
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            sx={{
              color: location.pathname === item.path ? '#4caf50' : 'inherit',
              '&:hover': {
                color: '#4caf50'
              }
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(18, 18, 18, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        zIndex: theme.zIndex.drawer + 1
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: '#4caf50',
            fontWeight: 700,
            fontSize: { xs: '1.2rem', sm: '1.5rem' }
          }}
        >
          Agrivision
        </Typography>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: '#4caf50' }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? '#4caf50' : 'inherit',
                  '&:hover': {
                    color: '#4caf50'
                  },
                  textTransform: 'none',
                  fontSize: '1rem'
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            background: 'rgba(18, 18, 18, 0.95)',
            backdropFilter: 'blur(10px)',
            borderLeft: '1px solid rgba(255,255,255,0.1)'
          }
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar; 
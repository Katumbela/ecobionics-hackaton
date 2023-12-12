import React, { useState } from 'react';
import logo from '../img/logo.png'
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons';

const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <AppBar position="relative" color="transparent">
        <Toolbar>
          <Typography  variant="h6" style={{ flexGrow: 1, }} >
            <img style={{height:'1.6em'}} src={logo} alt="" />
          </Typography>
          <IconButton edge="start" color="white" aria-label="menu" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        <List>
          <ListItem button>
            <ListItemText primary="Recursos" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Como Funciona" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contato" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Head;

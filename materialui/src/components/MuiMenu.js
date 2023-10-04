import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
const MuiMenu = () => {
  const [first, setfirst] = useState(null);
  const open = Boolean(first);
  const handleclick = (event) => {
    setfirst(event.currentTarget);
  };
  const handleclose = () =>{
    setfirst(null)
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography varient="h6" component={"div"} sx={{ flexGrow: 1 }}>
          CatchingPokemon
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit">Fetures</Button>
          <Button color="inherit">Princing</Button>
          <Button
            color="inherit"
            id="resource-button"
            onClick={handleclick}
            aria-controls={open ? "resource-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon/>}
          >
            Resources
          </Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
      <Menu
        id="resorces-menu"
        anchorEl={first}
        open={open} 
        MenuListProps={{ "aria-labelledby": "resources-button" }}
        onClose={handleclose}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'right'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
      >
        <MenuItem onClick={handleclose}>Blog</MenuItem>
        <MenuItem onClick={handleclose}>Podcast</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default MuiMenu;

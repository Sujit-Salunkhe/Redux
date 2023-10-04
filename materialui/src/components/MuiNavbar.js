import React from 'react'
import { AppBar,Toolbar,IconButton,Typography,Stack, Button } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
const MuiNavbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <CatchingPokemonIcon/>  
        </IconButton>
        <Typography varient='h6' component={'div'} sx={{flexGrow: 1}}>
            CatchingPokemon
        </Typography>
        <Stack direction={'row'} spacing={2}>   
            <Button color='inherit'>Fetures</Button>
            <Button color='inherit'>Princing</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar

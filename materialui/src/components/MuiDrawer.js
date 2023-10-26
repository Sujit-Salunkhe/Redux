import { Drawer,Box,Typography,IconButton, Icon } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const MuiDrawer = () => {
    const [draweropne,setDrawerOpen] = useState(false)
  return (
    <>
    <IconButton size='large' edge={'start'} aria-label='logo' onClick={() => setDrawerOpen(true)}>
        <MenuIcon/>
    </IconButton>
    <Drawer ancher='left' open={draweropne} onClose={()=> setDrawerOpen(false)}>
      <Box p={2} width={'250px'} textAlign={'center'} role={'presentation'}>
        <Typography  variant='h6'>
            Side panel
        </Typography>

      </Box>
    </Drawer>
    </>
  )
}

export default MuiDrawer

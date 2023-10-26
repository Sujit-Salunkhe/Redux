import React, { useState } from 'react'
import { Box,FormControlLabel,Switch } from '@mui/material'
const MuiSwitch = () => {
    const [checked,setchecked] = useState(false)
    const handlechange = (event) => {
        setchecked(event.target.checked)
    }
    console.log(checked)
  return (
    <Box>
       <FormControlLabel label='Dark mode' control={<Switch checked={checked} onChange={handlechange} size='small' color='secondary'/>}/>
    </Box>
  )
}

export default MuiSwitch

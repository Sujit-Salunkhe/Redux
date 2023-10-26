import { Chip, Stack,Avatar } from '@mui/material'
import React, { useState } from 'react'
import FaceIcon from '@mui/icons-material/Face';

const MuiChip = () => {
    const [chips,setchips] = useState(['chip 1','chip 2','chip 3'])
    const handleDelete = (chiptodelete) => {
            setchips((chips) => chips.filter((chip)=> chip !== chiptodelete))
    }
  return (
    <Stack direction={'row'} spacing={1}>
      <Chip label='chip'  color='primary' size='small' icon={<FaceIcon/>}/>
      <Chip label='chip-outlined'  color='secondary' size='small' variant='outlined' avatar={<Avatar>V</Avatar>} />
      <Chip label='click' color='success' onClick={()=>alert("clicked")}/>
      <Chip label='delete' color='error' onClick={()=>alert("clicked")} onDelete={()=>alert("delete handler called")}/>
      {
        chips.map(chip=>(
            <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>
        ))
      }
    </Stack>
  )
}

export default MuiChip

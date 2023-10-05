import { IconButton, Stack,Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const MuiToolkit = () => {
  return (
    <Tooltip title='Delete' placement='right' arrow enterDelay={500} leaveDelay={500}>
    <IconButton>
      <DeleteIcon/>
    </IconButton>
    </Tooltip>
  )
}

export default MuiToolkit

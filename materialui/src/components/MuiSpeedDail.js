import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
const MuiSpeedDail = () => {
  return (
    <SpeedDial ariaLabel='Navigation speed dial' sx={{position: 'absolute' , bottom:16 ,right:16}}
    icon ={<SpeedDialIcon openIcon={<EditIcon/>}  />}
    >
      <SpeedDialAction icon ={<FileCopyOutlinedIcon />} tooltipTitle='copy' />
      <SpeedDialAction icon ={<PrintIcon />} tooltipTitle='Print' />
      <SpeedDialAction icon ={<ShareIcon />} tooltipTitle='Share' />
    </SpeedDial>
  )
}

export default MuiSpeedDail

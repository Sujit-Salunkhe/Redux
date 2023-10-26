import { Stack,Avatar,AvatarGroup } from '@mui/material'
import React from 'react'

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction={'row'} spacing={1}>
            <Avatar sx={{backgroundColor : 'primary.light'}}>sk</Avatar>
            <Avatar sx={{backgroundColor : 'secondary.light'}}>ak</Avatar>
        </Stack>
        <Stack direction={'row'} spacing={1}>
            <AvatarGroup max={3}>
            <Avatar sx={{backgroundColor : 'primary.light'}}>sk</Avatar>
            <Avatar sx={{backgroundColor : 'secondary.light'}}>ak</Avatar>
            <Avatar src='https://randomuser.me/api/portraits/women/70.jpg' alt='janny'/>
            <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='janny'/>
            </AvatarGroup>
        </Stack>
        <Stack direction={'row'} spacing={1} >
            <Avatar variant='square' sx={{backgroundColor : 'primary.light' }}>sk</Avatar>
            <Avatar variant='rounded' sx={{backgroundColor : 'secondary.light'}}>ak</Avatar>
        </Stack>
    </Stack>
  )
}

export default MuiAvatar

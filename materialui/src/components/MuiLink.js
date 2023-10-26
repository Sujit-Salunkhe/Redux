import React from 'react'
import { Stack,Link, Typography } from '@mui/material'

const MuiLink = () => {
  return (
    <Typography variant='h6'>
    <Stack spacing={2} direction={'row'} m={4}>
      <Link href='#'>Link</Link>
    </Stack>
    </Typography>
  )
}

export default MuiLink

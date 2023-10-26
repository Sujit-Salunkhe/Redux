import React, { useState } from 'react'
import { Stack,TextField,InputAdornment } from '@mui/material'
const MuiTextFiled = () => {
    const [value,setvalue] = useState("")
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction={"row"}>
            <TextField label='name' variant='outlined'/>
            <TextField label='name' variant='filled'/>
            <TextField label='name' variant='standard'/>
        </Stack>
        <Stack spacing={2} direction={"row"}>
        <TextField label='small secondary' size='small' color='secondary'/>
        </Stack>
        <Stack spacing={2} direction={"row"}>
        <TextField label="input form" required />
        <TextField label='password' type='password' helperText="Do not share your password with anyone" disabled/>
        <TextField label="read only" InputProps={{readOnly:true}} />
        </Stack>
        <Stack spacing={2} direction={"row"}>
        <TextField label="Amount" InputProps={{startAdornment :<InputAdornment position='start'>$</InputAdornment>}}/>
        <TextField label="Weight" InputProps={{endAdornment :<InputAdornment position='end'>Kg</InputAdornment>}}/>
        </Stack>
        <Stack spacing={2} direction={"row"}>
        <TextField label='password' onChange={e => setvalue(e.target.value)} value={value} required  error={!value} helperText={!value ? "required " : "Do not share password with anyone"}/>
        </Stack>


    </Stack>
    
    

  )
}

export default MuiTextFiled

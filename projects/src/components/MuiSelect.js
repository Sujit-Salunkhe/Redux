import React, { useState }   from 'react'
import { Box,TextField,MenuItem } from '@mui/material'

const MuiSelect = () => {
    const [country,setcountryies] = useState([])
    const handleChange = (event) =>{
        const value=event.target.value
        setcountryies(typeof value === 'string'? value.split(',') : value)  
    }
    console.log(country)
  return (
    <Box width={"250px"}>
      <TextField label='select  country' select onChange={handleChange} fullWidth value={country} SelectProps={{multiple:true}} size="small" color='secondary' helperText='plesase select your country' error>
        <MenuItem value="in">India</MenuItem>
        <MenuItem value="ua">United America</MenuItem>
        <MenuItem value="ch">China</MenuItem>
      </TextField>
    </Box>
  )
}

export default MuiSelect

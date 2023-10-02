import React, { useState } from 'react'
import { Box,FormControl,FormControlLabel,FormLabel, RadioGroup,Radio,FormHelperText } from '@mui/material'
const MuiRadioButtton = () => {
    const [value,setvalue] = useState("")
    console.log({value})
    const handlechange = (event) =>{
        setvalue(event.target.value)
    }
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
            Years of Experience
        </FormLabel>
        <RadioGroup name='job-experinece-group' aria-labelledby='job-experience-group-label' value={value} onChange={handlechange} row>
            <FormControlLabel control={<Radio size='medium' color='secondary'/> } label ='0-2' value ='0-2'/>
            <FormControlLabel control={<Radio/> } label ='3-5' value ='3-5'/>
            <FormControlLabel control={<Radio/> } label ='6-10' value ='6-10'/>

        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButtton

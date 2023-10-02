import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const MuiCheckbox = () => {
  const [value, setvalue] = useState(false);
  const [skills, setskills] = useState([]);
  console.log({ value });
  console.log(skills)

  const handleChange = (event) => {
    setvalue(event.target.checked);
  };
  const handleskillchange = (event) =>{
    const index=skills.indexOf(event.target.value)
    if (index === -1){
        setskills([...skills,event.target.value])
    }else {
        setskills(skills.filter((skill) => skill !== event.target.value))
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="i accept terms and conditions"
          control={<Checkbox checked={value} onChange={handleChange} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={value}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
            <FormControlLabel
          label="HTML"
          control={<Checkbox  value={"html"}  checked={skills.includes('html')} onChange={handleskillchange} />}
        ></FormControlLabel>
        <FormControlLabel
          label="css"
          control={<Checkbox  value={"css"} checked={skills.includes('css')} onChange={handleskillchange} />}
        ></FormControlLabel>
        <FormControlLabel
          label="javascript"
          control={<Checkbox checked={skills.includes('javascipt')} onChange={handleskillchange} value={"javascript"} />}
        ></FormControlLabel>
            </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;

import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
const skills = ["React", "Html", "javascript", "css", "python"];
const skilloptions = skills.map((skill, index) => ({
  id: index + 1,
  skill: skill,
}));    
const MuiAutocomplete = () => {
  const [value, setvalue] = useState(null);
  const [skill,setSkill] =useState(null)
  console.log(value);
  console.log(skill);

  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event, newvalue) => {
          setvalue(newvalue);
        }}
        freeSolo
      />
      <Autocomplete
        options={skilloptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event, newvalue) => {
          setSkill(newvalue);
        }}
        
      />
    </Stack>
  );
};

export default MuiAutocomplete;

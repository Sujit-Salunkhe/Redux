import React, { useState } from "react";
import { Rating, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MuiRating = () => {
  const [value, setvalue] = useState(null);
  console.log(value);
  const handlechange = (evet, newvalue) => {
    setvalue(newvalue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handlechange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon  fontSize="inherit"  color="error"/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
        readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;

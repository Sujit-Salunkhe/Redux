import { BottomNavigation, BottomNavigationAction, Stack } from "@mui/material";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
const MuiBottomNavigation = () => {
  const [value, setvalue] = useState(0);
  return (
    <Stack>
      <BottomNavigation
        sx={{ width: "100%", position: "absolute", bottom: 0 }}
        value={value}
        onChange={(event, newvalue) => setvalue(newvalue)}
        showLabels
      >
        <BottomNavigationAction label="home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Stack>
  );
};

export default MuiBottomNavigation;

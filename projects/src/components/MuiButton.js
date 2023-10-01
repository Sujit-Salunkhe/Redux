import { Stack, Button,IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack display={"block"} direction={"row"} spacing={2}>
        <Button variant="contained" size="small">small</Button>
        <Button variant="contained" size="medium">medium</Button>
        <Button variant="contained" size="large">large</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon/>} disableRipple onClick={()=>{alert("click")}}>send</Button>
        <Button variant="contained" endIcon={<SendIcon/>} disableElevation>send</Button>
        <IconButton aria-label="send" color="success" size="medium">
            <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default MuiButton;

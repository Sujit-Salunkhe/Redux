import { Snackbar, Button ,Alert ,AlertProps } from "@mui/material";
import { forwardRef, useState } from "react";
const SnackbarAlert =forwardRef (
    function SnackbarAlert (props,ref){
        return <Alert elevation={6} ref={ref} {...props}/>
    }
)

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleclose = (event, reason) => {
    if (reason === "clickedaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleclose}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
      /> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleclose}>
        <SnackbarAlert onClose={handleclose}  severity='success'>
            Form submitted successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackbar;

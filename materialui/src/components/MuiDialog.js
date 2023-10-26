import { Button,Dialog,DialogTitle,DialogContent,DialogContentText,Dialo, DialogActions } from '@mui/material'
import {useState} from 'react'

const MuiDialog = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
     <Button onClick={() => setOpen(true)}>
        openDialog
    </Button>
    <Dialog aria-labelledby='dialog-title' aria-describedby='dialog-description' open={open} onClose={() => setOpen(false)}>
        <DialogTitle id='dialog-title'>Submit the test</DialogTitle>
        <DialogContent>
            <DialogContentText id='dialog-description'>
                Are you sure you want to submit the test? you will not be able to edit after sumbimiting
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
        </DialogActions>
    </Dialog> 
    </>
  )
}

export default MuiDialog

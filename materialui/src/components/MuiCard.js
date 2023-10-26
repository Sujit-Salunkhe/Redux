import React from 'react'
import { Box,Card,CardContent,Typography,CardActions,Button ,CardMedia} from '@mui/material'
const MuiCard = () => {
  return (
    <Box width={'300px'}>
      <Card>
        <CardMedia
        component={'img'}
        height={'140px'}
        image={'https://images.unsplash.com/photo-1696009228202-70bd4c22f4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
        alt='unspalshimg'
        />
        <CardContent>
            <Typography gutterBottom varient='h5' component='div'>
                React
            </Typography>
            <Typography variant='body2' color='text.secondary'>
            [redux b5f92cb] learnig grid,box,stack layout of muterial ui
 2 files changed, 64 insertions(+), 1 deletion(-)
 create mode 100644 materialui/src/components/MuiLayout.js
            </Typography>
        </CardContent>
        <CardActions>
            <Button>Share</Button>
            <Button>learn more</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard
